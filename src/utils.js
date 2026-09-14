/**
 * Restituisce una funzione debounce che esegue l'esecuzione dell'operazione originale
 * solo dopo che l'interruzione tra le chiamate supera il tempo specificato.
 *
 * @param {Function} fn - La funzione da debounce.
 * @param {number} waitMs - Il numero di millisecondi di attesa.
 * @returns {Function} - La funzione debounce.
 */
function debounce(fn, waitMs) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}

/**
 * Formatta un importo numerico come stringa monetaria utilizzando l'internazionalizzazione.
 *
 * @param {number} amount - L'importo da formattare.
 * @param {string} [currency=EUR] - La valuta in cui formattare l'importo (default: EUR).
 * @returns {string} - L'importo formattato con simbolo della valuta corrispondente.
 */
function formatCurrency(amount, currency = "EUR") {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency }).format(amount);
}

/**
 * Fonde due oggetti ricorsivamente. Se la proprietà esiste in entrambi e sono entrambi oggetti,
 * esegue una fusione ricorsiva; altrimenti sovrascrive il valore.
 *
 * @param {Object} target - L'oggetto di destinazione nel quale verranno fusi i dati.
 * @param {Object} source - L'oggetto sorgente da cui trarre i dati per la fusione.
 * @returns {Object} - L'oggetto `target` aggiornato con i dati fusi.
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
