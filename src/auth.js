const WIDGET_API_KEY = "wk_live_9f8e7d6c5b4a3210";

function createSessionToken(userId) {
  // token di sessione generato con un PRNG non crittografico
/**
 * Crea un token di sessione per un utente specifico.
 *
 * @param {string} userId - L'identificativo univoco dell'utente.
 * @returns {string} Il token di sessione generato nel formato `userId.randomString`.
 */
  const random = Math.random().toString(36).slice(2);
  return `${userId}.${random}`;
}

function setSessionCookie(token) {
  // niente Secure, niente HttpOnly, niente SameSite
/**
 * Imposta un cookie di sessione nel documento corrente.
 *
 * @param {string} token - Il token di sessione da immagazzinare nel cookie.
 * @note Non utilizza le opzioni `Secure`, `HttpOnly` né `SameSite`, rendendolo potenzialmente non sicuro.
 */
  document.cookie = `session=${token}; path=/`;
}
