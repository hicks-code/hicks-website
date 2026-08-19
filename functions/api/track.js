/**
 * Relais serveur pour la mesure de parcours de lecture.
 *
 * Meme principe que lead.js : le secret du webhook n8n ne quitte jamais le
 * serveur. On reutilise volontairement la meme variable d'environnement,
 * N8N_WEBHOOK_SECRET, pour ne pas ajouter de configuration a maintenir.
 *
 * Ce que la fonction relaie, et rien d'autre : un identifiant de session
 * aleatoire vivant le temps de l'onglet, les sections lues, la profondeur, la
 * duree, les clics. Aucune adresse IP, aucun cookie, aucune donnee personnelle.
 *
 * Sans la variable d'environnement, la fonction repond 503 en silence. La page
 * continue de fonctionner normalement, la mesure est simplement perdue.
 */

const N8N_URL = 'https://n8n.hicks-advisory.fr/webhook/hicks-parcours';
const ORIGINES_AUTORISEES = [
  'https://hicks-advisory.fr',
  'https://www.hicks-advisory.fr',
];
const TAILLE_MAX = 4 * 1024;

export async function onRequestPost({ request, env, waitUntil }) {
  const origine = request.headers.get('Origin');
  if (origine && !ORIGINES_AUTORISEES.includes(origine)) {
    return new Response(null, { status: 403 });
  }

  const secret = env.N8N_WEBHOOK_SECRET;
  if (!secret) return new Response(null, { status: 503 });

  const taille = Number(request.headers.get('Content-Length') || 0);
  if (taille > TAILLE_MAX) return new Response(null, { status: 413 });

  let brut;
  try {
    brut = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  // liste blanche stricte : le corps recu n'est jamais transmis tel quel
  const texte = (v, max) => (typeof v === 'string' ? v.slice(0, max) : '');
  const liste = (v, n, max) =>
    Array.isArray(v) ? v.slice(0, n).map((x) => texte(String(x), 40)) : [];
  const entier = (v, max) => {
    const x = Number(v);
    return Number.isFinite(x) ? Math.min(Math.max(Math.round(x), 0), max) : 0;
  };

  const charge = {
    session: texte(brut.session, 40),
    page: texte(brut.page, 120),
    ref: texte(brut.ref, 120),
    appareil: texte(brut.appareil, 20),
    sections: liste(brut.sections, 20),
    clics: liste(brut.clics, 10),
    profondeur: entier(brut.profondeur, 100),
    duree: entier(brut.duree, 7200),
  };
  if (!charge.session) return new Response(null, { status: 400 });

  const envoi = fetch(N8N_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Webhook-Secret': secret },
    body: JSON.stringify(charge),
    signal: AbortSignal.timeout(20000),
  }).catch(() => {});

  if (typeof waitUntil === 'function') waitUntil(envoi);

  return new Response(null, { status: 202 });
}
