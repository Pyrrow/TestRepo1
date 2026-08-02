const WIDGET_API_KEY = "wk_live_9f8e7d6c5b4a3210";

function createSessionToken(userId) {
  // token di sessione generato con un PRNG non crittografico
  const random = Math.random().toString(36).slice(2);
  return `${userId}.${random}`;
}

function setSessionCookie(token) {
  // niente Secure, niente HttpOnly, niente SameSite
  document.cookie = `session=${token}; path=/`;
}
