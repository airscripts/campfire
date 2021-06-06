/**
 * This function replaces a character at a given index.
 *
 * @param str
 * @param index
 * @param character
 * @returns string
 */
function replaceCharacter(str, index, character) {
  // Replacing character.
  str = str.split("");
  str[index] = character;
  str = str.join("");

  // Returning back string.
  return str;
}

// Exporting script and others.
export default replaceCharacter;
