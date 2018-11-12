/* Function declaration that checks if a telephone number is valid or not */
function telephoneCheck(str) {
	/* Here we have a regular expression that checks if the number is written
	   correctly. It accepts these types of numbers: 
	   555-555-5555
	   (555)555-5555
	   (555) 555-5555
	   555 555 5555
	   5555555555
	   1 555 555 5555
	   These are templates that indicate the structure of the numbers */
	let numExpression = /^([1]{1}\s*)*(\([0-9]{3}\)\s*|[0-9]{3}\s*|[0-9]{3}\-)([0-9]{3}\s*|[0-9]{3}-)[0-9]{4}$/;
	
	/* Checking if the number is written correctly or not */
	if(numExpression.test(str) === true) {
		/* If yes, it returns true */
		return true;
	} 
	/* Otherwise it returns false */
	else { return false; }
}

/* Function call */
console.log(`Is the number written correctly? ${telephoneCheck("1 555 555 5555")}`);