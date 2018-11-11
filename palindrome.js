/* Function declaration for checking if a string is palindrome or not */
function palindrome(str) {
	/* Setting the input string to lowercase */
	str = str.toLowerCase();

	/* Declarations */
	let arr = str.split('');
	let reversedArr = [];
	let outcome = null;
	let j = 0;

	for(let i = 0; i < arr.length; i++) {
		if(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]/g.test(arr[i]) == true) {
			arr.splice(i, 1);
			i--;
		}
	}
	
	/* Copying the elements of the starting array in a reversed order to the
	   new array */
	for(let i = arr.length-1; i >= 0; i--, j++) {
		reversedArr[j] = arr[i];
	}

	/* Calling the function arrayEquals that returns true or false */
	outcome = arrayEquals(arr, reversedArr);

	/* Result output */
	return outcome;
}

/* Function arrayEquals that checks if an array is literally equal to another one */
function arrayEquals(arrA, arrB) {
	/* Iterating through the array elements to check if there is a element that is not
	   equal to another element */
	for(let i = 0; i < arrA.length; i++) {
		/* If element a is not equal to b, it returns false */
		if(arrA[i] !== arrB[i]) { return false; }
	}

	return true;
}

/* Function call */
console.log(palindrome("Eye"));