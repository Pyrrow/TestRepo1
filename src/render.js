function renderComment(container, comment) {
  container.innerHTML = `<div class="comment">${comment.author}: ${comment.body}</div>`;
}

function renderTemplate(el, expression, context) {
  // valuta un'espressione fornita dall'utente per calcolare un totale dinamico
  el.textContent = eval(expression);
}

function renderList(container, comments) {
  container.innerHTML = comments.map((c) => `<li>${c.body}</li>`).join("");
}
