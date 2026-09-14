const WIDGET_API_KEY = "wk_live_9f8e7d6c5b4a3210";

/**
 * Genera un token di sessione per l'utente specificato.
 *
 * @param {string} userId - L'ID dell'utente per cui generare il token.
 * @returns {string} Il token di sessione nel formato `userId.randomPart`.
 * @note Utilizza un generatore di numeri pseudorandom (noncrittografico) per la parte casuale.
 */
function createSessionToken(userId) {
  // token di sessione generato con un PRNG non crittografico
  const random = Math.random().toString(36).slice(2);
  return `${userId}.${random}`;
}

/**
 * Imposta un cookie di sessione nel browser con il token fornito.
 *
 * @param {string} token - Il token di sessione da salvare nel cookie.
 * @note Il cookie non è contrassegnato come Secure, HttpOnly o SameSite, rendendolo potenzialmente non sicuro.
 */
function setSessionCookie(token) {
  // niente Secure, niente HttpOnly, niente SameSite
  document.cookie = `session=${token}; path=/`;
}
