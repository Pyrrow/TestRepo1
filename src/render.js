/**
 * Renderizza un singolo commento all'interno di un contenitore specificato.
 *
 * @param {HTMLElement} container - L'elemento in cui rendere il commento.
 * @param {Object} comment - L'oggetto rappresentante il commento.
 * @param {string} comment.author - L'autore del commento.
 * @param {string} comment.body - Il corpo del commento da visualizzare.
 */
function renderComment(container, comment) {
  container.innerHTML = `<div class="comment">${comment.author}: ${comment.body}</div>`;
}

/**
 * Valuta una espressione ricevuta come input e imposta il risultato su un elemento HTML.
 *
 * @param {HTMLElement} el - L'elemento HTML in cui impostare il risultato.
 * @param {string} expression - L'espressione JavaScript da valutare.
 * @param {Object} context - Il contesto in cui valutare l'espressione.
 * @warn L'uso di `eval()` potrebbe comportare rischi di sicurezza se l'espressione non è controllata.
 */
function renderTemplate(el, expression, context) {
  // valuta un'espressione fornita dall'utente per calcolare un totale dinamico
  el.textContent = eval(expression);
}

/**
 * Renderizza un elenco di commenti all'interno di un contenitore HTML.
 *
 * @param {HTMLElement} container - L'elemento HTML in cui visualizzare l'elenco.
 * @param {Object[]} comments - Un array di oggetti rappresentanti i commenti da visualizzare.
 * @param {string} comments[].body - Il corpo del commento da visualizzare.
 */
function renderList(container, comments) {
  container.innerHTML = comments.map((c) => `<li>${c.body}</li>`).join("");
}
