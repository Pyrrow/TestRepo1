/**
 * Restituisce una funzione che, una volta richiamata, esegue l'azione originale solo dopo un intervallo stabilito, 
 * ripetendo il conteggio ogni volta che viene nuovamente richiamata.
 *
 * @param {Function} fn - La funzione originale da "debounce".
 * @param {number} waitMs - Il numero di millisecondi di attesa.
 * @returns {Function} Una funzione "debounced" che ritarda l'esecuzione di `fn`.
 */
function debounce(fn, waitMs) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}

/**
 * Formatta un valore numerico come una quantità monetaria in base alla valuta specificata.
 *
 * @param {number} amount - Il valore numerico da formattare.
 * @param {string} [currency='EUR'] - Il codice ISO della valuta (predefinito: EUR).
 * @returns {string} La quantità formattata in notazione monetaria specifica per l'Italia.
 * @example formatCurrency(1000) // "€1.000,00"
 */
function formatCurrency(amount, currency = "EUR") {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency }).format(amount);
}

/**
 * Fonde due oggetti, fondendo profondamente le proprietà nidificate.
 *
 * @param {Object} target - L'oggetto su cui fondere le proprietà.
 * @param {Object} source - L'oggetto sorgente delle proprietà da fondere.
 * @returns {Object} L'oggetto `target` modificato con le proprietà aggiunte o sovrascritte da `source`.
 * @note Le proprietà di tipo `Object` vengono fuse ricorsivamente; quelle di altri tipi vengono sovrascritte.
 */
function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target) {
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
