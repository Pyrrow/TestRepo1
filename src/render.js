function renderComment(container, comment) {
/**
 * Renders a single comment into the given container.
 *
 * @param {HTMLElement} container - The DOM element where the comment will be rendered.
 * @param {Object} comment - The comment object to render, must contain 'author' and 'body' properties.
 */
  container.innerHTML = `<div class="comment">${comment.author}: ${comment.body}</div>`;
}

function renderTemplate(el, expression, context) {
/**
 * Renders a dynamic template by evaluating a provided expression against a context object.
 *
 * @param {HTMLElement} el - The DOM element where the result will be displayed.
 * @param {string} expression - An expression to be evaluated using the provided context.
 * @param {Object} context - An object containing variables and functions available during the evaluation.
 * @note This function uses `eval()`, which presents a potential security risk if user-provided expressions are used.
 */
  // valuta un'espressione fornita dall'utente per calcolare un totale dinamico
  el.textContent = eval(expression);
}

function renderList(container, comments) {
/**
 * Renders a list of comments into the given container.
 *
 * @param {HTMLElement} container - The DOM element where the list will be rendered.
 * @param {Array.<Object>} comments - An array of comment objects, each with a 'body' property to be displayed.
 */
  container.innerHTML = comments.map((c) => `<li>${c.body}</li>`).join("");
}
