# Regole di sviluppo sicuro — comments-widget

REGOLA-1: mai assegnare contenuto proveniente dall'utente a `innerHTML`
senza prima sanitizzarlo; preferire `textContent` o una libreria dedicata.

REGOLA-2: è vietato l'uso di `eval` o di costrutti equivalenti su input non
fidato.

REGOLA-3: i token di sessione devono essere generati con
`crypto.getRandomValues`, mai con `Math.random`.

REGOLA-4: i cookie di sessione devono avere gli attributi `Secure`,
`HttpOnly` e `SameSite`.
