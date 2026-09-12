function debounce(fn, waitMs) {
/**
 * Crea una versione debouncata della funzione fornita.
 *
 * La funzione decorata verrà eseguita una volta trascorso un intervallo di tempo privo di chiamate.
 *
 * @param {Function} fn - La funzione da avvolgere nel debouncing.
 * @param {number} waitMs - Il tempo (in millisecondi) da attendere prima di eseguire la funzione.
 * @returns {Function} La funzione debouncata.
 */
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}

function formatCurrency(amount, currency = "EUR") {
/**
 * Formatta un importo numerico in una stringa monetaria localizzata (IT).
 *
 * @param {number} amount - L'importo numerico da formattare.
 * @param {string} [currency=EUR] - La valuta. Valori supportati sono codici ISO a 3 lettere.
 * @returns {string} L'importo formattato nel formato monetario.
 */
  return new Intl.NumberFormat("it-IT", { style: "currency", currency }).format(amount);
}

function deepMerge(target, source) {
/**
 * Esegue un merge profondo di due oggetti. In caso di collisione, 
 * il valore dell'oggetto source sovrascrive il valore dell'oggetto target.
 * Gli oggetti nidificati vengono fusi ricorsivamente.
 *
 * @param {Object} target - L'oggetto di destinazione in cui verranno fusi i dati (modificato in-place).
 * @param {Object} source - L'oggetto sorgente da unire all'oggetto di destinazione.
 * @returns {Object} L'oggetto resultante del merge (equivale a 'target').
 */
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target) {
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
