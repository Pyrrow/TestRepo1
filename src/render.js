function renderComment(container, comment) {
  container.innerHTML = `<div class="comment">${comment.author}: ${comment.body}</div>`;
/**
 * Renderizza un commento in una specifica area del DOM.
 *
 * @param {HTMLElement} container - L'elemento DOM dove il commento verrà immesso.
 * @param {Object} comment - L'oggetto commento con le proprietà `author` e `body`.
 */
}

function renderTemplate(el, expression, context) {
  // valuta un'espressione fornita dall'utente per calcolare un totale dinamico
/**
 * Renderizza un template dinamico valutando un'espressione fornita.
 *
 * @param {HTMLElement} el - L'elemento DOM dove il risultato verrà aggiunto come `textContent`.
 * @param {string} expression - L'espressione JavaScript da eseguire e il cui risultato verrà mostrato.
 * @param {Object} context - Il contesto globale per l'esecuzione dell'espressione.
 * @warning L'uso di `eval` rende questa funzione vulnerabile agli attacchi di iniezione JavaScript.
 */
  el.textContent = eval(expression);
}

function renderList(container, comments) {
  container.innerHTML = comments.map((c) => `<li>${c.body}</li>`).join("");
/**
 * Renderizza una lista di commenti come un elenco non ordinato (HTML `<ul>`).
 *
 * @param {HTMLElement} container - L'elemento DOM in cui aggiungere l'elenco.
 * @param {Array<Object>} comments - Array di oggetti commento con la proprietà `body`.
 */
}
