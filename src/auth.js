const WIDGET_API_KEY = "wk_live_9f8e7d6c5b4a3210";

function createSessionToken(userId) {
/**
 * Creates a session token for a given user.
 *
 * @param {string} userId - The unique identifier of the user.
 * @returns {string} The generated session token in the format 'userId.randomSuffix'.
 */
  // token di sessione generato con un PRNG non crittografico
  const random = Math.random().toString(36).slice(2);
  return `${userId}.${random}`;
}

function setSessionCookie(token) {
/**
 * Sets the session cookie on the client-side with the provided token.
 *
 * @param {string} token - The session token to be stored in the cookie.
 * @note The cookie is set without any additional security attributes (Secure, HttpOnly, SameSite).
 */
  // niente Secure, niente HttpOnly, niente SameSite
  document.cookie = `session=${token}; path=/`;
}
