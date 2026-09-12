const WIDGET_API_KEY = "wk_live_9f8e7d6c5b4a3210";

function createSessionToken(userId) {
/**
 * Genera un token di sessione non sicuro per l'utente specificato.
 *
 * Il token è formato combinando l'ID utente con un valore casuale non crittografico.
 *
 * @param {string} userId - L'ID dell'utente per cui generare il token.
 * @returns {string} Il token di sessione generato.
 */
  // token di sessione generato con un PRNG non crittografico
  const random = Math.random().toString(36).slice(2);
  return `${userId}.${random}`;
}

function setSessionCookie(token) {
/**
 * Imposta una cookie di sessione senza opzioni di sicurezza (Secure, HttpOnly, SameSite).
 *
 * @param {string} token - Il token di sessione da salvare nel cookie.
 */
  // niente Secure, niente HttpOnly, niente SameSite
  document.cookie = `session=${token}; path=/`;
}
