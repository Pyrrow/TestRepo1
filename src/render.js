function renderComment(container, comment) {
/**
 * Renderizza un singolo commento nell'interfaccia utente.
 *
 * @param {HTMLElement} container - L'elemento in cui renderizzare il commento.
 * @param {Object} comment - L'oggetto commento da visualizzare, deve contenere il campo 'author' e 'body'.
 */
  container.innerHTML = `<div class="comment">${comment.author}: ${comment.body}</div>`;
}

function renderTemplate(el, expression, context) {
/**
 * Valuta e renderizza un'espressione fornita dall'utente in un elemento specifico.
 *
 * AVVISO DI SICUREZZA: utilizza `eval`, quindi richiede estrema prudenza.
 *
 * @param {HTMLElement} el - L'elemento in cui mostrare il risultato.
 * @param {string} expression - L'espressione da valutare, fornita dall'utente.
 * @param {Object} context - Il contesto per l'esecuzione dell'espressione.
 */
  // valuta un'espressione fornita dall'utente per calcolare un totale dinamico
  el.textContent = eval(expression);
}

function renderList(container, comments) {
/**
 * Renderizza un elenco di commenti come un elenco HTML non ordinato.
 *
 * @param {HTMLElement} container - L'elemento in cui mostrare l'elenco.
 * @param {Object[]} comments - L'array di commenti da visualizzare, ognuno deve contenere un campo 'body'.
 */
  container.innerHTML = comments.map((c) => `<li>${c.body}</li>`).join("");
}
