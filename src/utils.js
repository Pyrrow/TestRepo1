function debounce(fn, waitMs) {
/**
 * Debounces a function call, ensuring it only executes after a certain delay.
 *
 * @param {Function} fn - The function to debounce.
 * @param {number} waitMs - The number of milliseconds to wait after the last call before invoking the function.
 * @returns {Function} - A debounced version of the original function.
 */
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}

function formatCurrency(amount, currency = "EUR") {
/**
 * Formats a monetary value into a localized currency string using Italian (Italy) formatting.
 *
 * @param {number} amount - The numeric value to be formatted.
 * @param {string} [currency=EUR] - The currency code to use for formatting (default is EUR).
 * @returns {string} - The localized formatted currency string.
 */
  return new Intl.NumberFormat("it-IT", { style: "currency", currency }).format(amount);
}

function deepMerge(target, source) {
/**
 * Deeply merges the properties of a source object into a target object.
 *
 * @param {Object} target - The target object into which properties will be merged.
 * @param {Object} source - The source object from which properties are taken.
 * @returns {Object} - The modified target object with merged properties.
 * @note If both target and source have an object at a property key, a recursive merge is performed.
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
