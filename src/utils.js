function debounce(fn, waitMs) {
  let timer = null;
/**
 * Restituisce una versione debounced di una funzione.
 *
 * @param {Function} fn - La funzione da debouncing.
 * @param {number} waitMs - Il numero di millisecondi da attendere prima di richiamare la funzione.
 * @returns {Function} Una nuova funzione con la logica di debounce applicata.
 */
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}

function formatCurrency(amount, currency = "EUR") {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency }).format(amount);
/**
 * Formatta un importo numerico in una stringa con notazione monetaria.
 *
 * @param {number} amount - L'importo numerico da formattare.
 * @param {string} [currency=EUR] - Il codice ISO della valuta (default: EUR).
 * @returns {string} L'importo formattato in base alle locale Italiane e al tipo di valuta specificato.
 */
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
/**
 * Unisce profondamente due oggetti JavaScript.
 *
 * @param {Object} target - L'oggetto su cui applicare le modifiche.
 * @param {Object} source - L'oggetto da unire nel target.
 * @returns {Object} L'oggetto `target` modificato e aggiornato dopo l'unione.
 * @note Questo funziona solo su oggetti; non vengono gestiti array o valori primitivi.
 */
    if (source[key] instanceof Object && key in target) {
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
