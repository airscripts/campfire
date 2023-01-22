function convertToRoman(num) {
  if (num <= 0 || num >= 4000) return console.log(`Number out of range.`);

  const romanNumerals = {
    1: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    2: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    3: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    4: ["M", "MM", "MMM"],
  }

  let numberConverted = "";
  let inputNum = num.toString();
  let inputLength = inputNum.length;

  for (let i = 1; i <= inputLength; i++) {
    if (Number(inputNum[inputLength - i]) !== 0) {
      numberConverted = romanNumerals[i][inputNum[inputLength - i] - 1] + numberConverted;
    }
  }

  return numberConverted;

}

console.log(convertToRoman(6));