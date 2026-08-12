/**
 * Relais serveur vers le webhook n8n.
 *
 * Raison d'etre : le secret d'authentification du webhook etait auparavant
 * ecrit en clair dans le JavaScript de la page, donc lisible par tout visiteur.
 * Un secret cote navigateur est public par construction. Il vit desormais dans
 * une variable d'environnement Cloudflare et ne quitte jamais le serveur.
 *
 * Configuration requise dans Cloudflare Pages, Settings > Environment variables :
 *   N8N_WEBHOOK_SECRET = <le NOUVEAU secret, l'ancien ayant ete expose>
 *
 * Sans cette variable, la fonction repond 503 et le formulaire continue de
 * fonctionner : l'envoi par email via Web3Forms est independant, aucun
 * prospect n'est perdu.
 */

const N8N_URL = 'https://n8n.hicks-advisory.fr/webhook/hicks-lead';
const ORIGINES_AUTORISEES = [
  'https://hicks-advisory.fr',
  'https://www.hicks-advisory.fr',
];
const TAILLE_MAX = 8 * 1024;

export async function onRequestPost({ request, env }) {
  // 1. l'appel doit venir du site, pas d'un script tiers
  const origine = request.headers.get('Origin');
  if (origine && !ORIGINES_AUTORISEES.includes(origine)) {
    return new Response(null, { status: 403 });
  }

  // 2. sans secret configure, on echoue proprement plutot que d'appeler sans auth
  const secret = env.N8N_WEBHOOK_SECRET;
  if (!secret) return new Response(null, { status: 503 });

  // 3. borne de taille, avant de lire quoi que ce soit
  const taille = Number(request.headers.get('Content-Length') || 0);
  if (taille > TAILLE_MAX) return new Response(null, { status: 413 });

  let brut;
  try {
    brut = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  // 4. on ne relaie que les champs attendus, tronques : le corps recu n'est
  //    jamais transmis tel quel a n8n
  const texte = (v, max) => (typeof v === 'string' ? v.slice(0, max) : '');
  const charge = {
    name: texte(brut.name, 80),
    email: texte(brut.email, 120),
    message: texte(brut.message, 4000),
  };
  if (!charge.name || !charge.email || !charge.message) {
    return new Response(null, { status: 400 });
  }

  try {
    const reponse = await fetch(N8N_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Webhook-Secret': secret },
      body: JSON.stringify(charge),
      signal: AbortSignal.timeout(8000),
    });
    return new Response(null, { status: reponse.ok ? 204 : 502 });
  } catch {
    return new Response(null, { status: 504 });
  }
}
