/**
 * Joins a set of strings with a dash.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip.
 * @author Aibueku Precious Okwuoma <https://github.com/aibuekuoprecious>
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = Array.from(set).filter(value => typeof value === 'string' && value.startsWith(startString));
  const cleanedParts = filteredValues.map(value => value.substring(startString.length)).join('-');
  return cleanedParts;
}
