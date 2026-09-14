const WIDGET_API_KEY = "wk_live_9f8e7d6c5b4a3210";

/**
 * Crea un token di sessione utilizzando un numero casuale non crittografico.
 *
 * @param {string} userId - L'ID utente per cui si genera il token.
 * @returns {string} Il token di sessione formattato come "userId.randomString".
 */
function createSessionToken(userId) {
  // token di sessione generato con un PRNG non crittografico
  const random = Math.random().toString(36).slice(2);
  return `${userId}.${random}`;
}

/**
 * Imposta una cookie di sessione sul client senza utilizzare le direttive di protezione
 * come Secure, HttpOnly o SameSite.
 *
 * @param {string} token - Il token di sessione da memorizzare nella cookie.
 */
function setSessionCookie(token) {
  // niente Secure, niente HttpOnly, niente SameSite
  document.cookie = `session=${token}; path=/`;
}
