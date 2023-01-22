/* Function declaration */
function rot13(str) { 
  /* Useful declarations */
  let position = null;

  /* Declaring a new array that will take all the decoded characters */
  let decodedStr = [];
  /* Setting the Caesar Cipher alphabet into a variable */
  let caesarAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM";

  /* Iterating for deconding the string */
  for(let i = 0; i < str.length; i++) {
  	/* Checking if the element is a special character */
  	if(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]/g.test(str[i]) == true) {
  		decodedStr[i] = str[i];
  		continue;
  	}

  	/* Searching for the position of the rot13 letter */
  	for(index in caesarAlphabet) {
  		if(caesarAlphabet[index] == str[i]) {
  			if(index >= 13) { position = Number(index) - 13; break;}
  			else { position = Number(index) + 13; break;}
  		}
  	}
 	
 	/* Pushing the letter into the decoded array */
  	decodedStr.push(caesarAlphabet[position]);
  }
  /* Result output */
  return decodedStr.join('');
}

/* Function call */
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));