function telephoneCheck(str) {
	let numExpression = /^([1]{1}\s*)*(\([0-9]{3}\)\s*|[0-9]{3}\s*|[0-9]{3}\-)([0-9]{3}\s*|[0-9]{3}-)[0-9]{4}$/;
	if (numExpression.test(str) === true) return true
	else return false;
}

console.log(telephoneCheck("1 555 555 5555"));