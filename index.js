function palindrome(str) {
  str = str.toLowerCase();

  let arr = str.split('');
  let reversedArr = [];
  let outcome = null;
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]/g.test(arr[i]) == true) {
      arr.splice(i, 1);
      i--;
    }
  }

  for (let i = arr.length - 1; i >= 0; i--, j++) {
    reversedArr[j] = arr[i];
  }

  outcome = arrayEquals(arr, reversedArr);
  return outcome;
}

function arrayEquals(arrA, arrB) {
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) { return false; }
  }

  return true;
}

console.log(palindrome("Eye"));