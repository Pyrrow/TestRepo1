/**
 * Renderizza un singolo commento su un elemento del DOM.
 *
 * @param {HTMLElement} container - L'elemento nel quale renderizzare il commento.
 * @param {Object} comment - L'oggetto commento con le proprietà `author` e `body`.
 */
function renderComment(container, comment) {
  container.innerHTML = `<div class="comment">${comment.author}: ${comment.body}</div>`;
}

/**
 * Valuta un'espressione JavaScript fornita e mostra il risultato nell'elemento specificato.
 *
 * @param {HTMLElement} el - L'elemento nel quale mostrare il risultato.
 * @param {string} expression - L'espressione JavaScript da valutare.
 * @param {Object} context - Il contesto in cui valutare l'espressione (non utilizzato in fase di rendering).
 */
function renderTemplate(el, expression, context) {
  // valuta un'espressione fornita dall'utente per calcolare un totale dinamico
  el.textContent = eval(expression);
}

/**
 * Renderizza un elenco di commenti come una lista non ordinata nell'elemento specificato.
 *
 * @param {HTMLElement} container - L'elemento nel quale renderizzare la lista dei commenti.
 * @param {Array<Object>} comments - L'array di oggetti commento con proprietà `body`.
 */
function renderList(container, comments) {
  container.innerHTML = comments.map((c) => `<li>${c.body}</li>`).join("");
}
