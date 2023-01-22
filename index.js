function rot13(str) {
  let position = null;
  let decodedStr = [];
  let caesarAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM";

  for (let i = 0; i < str.length; i++) {
    if (/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]/g.test(str[i]) == true) {
      decodedStr[i] = str[i];
      continue;
    }

    for (index in caesarAlphabet) {
      if (caesarAlphabet[index] == str[i]) {
        if (index >= 13) { position = Number(index) - 13; break; }
        else { position = Number(index) + 13; break; }
      }
    }

    decodedStr.push(caesarAlphabet[position]);
  }

  return decodedStr.join('');
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));