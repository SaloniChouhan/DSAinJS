// factorial solution ******************************************
// function factorial(num) {
//   if (num < 0) {
//     return 0;
//   }

//   if (num <= 0) {
//     return 1;
//   }

//   return num * factorial(num - 1);
// }

// factorial(5);

// product of array **********************************************
// function productOfArray(arr) {
//   if (arr.length === 0) {
//     return 1;
//   }
//   return arr[0] * productOfArray(arr.slice(1));
// }

// productOfArray([1, 2, 3, 4]);

// fibonacci number *********************************************
// function fibonacciseries(num) {
//   if (num <= 2) {
//     return 1;
//   }
//   return fibonacciseries(num - 1) + fibonacciseries(num - 2);
// }

// fibonacciseries(5);

// fib(4) + fib(3)
// fib (3) + fib(2) + fib(2) + fib(1)

// Power solutions *********************************************
// function power(base, exponent) {
//   if (exponent === 0) return 1;
//   return base * power(base, exponent - 1);
// }

// power(3, 4);

// string reversals ***********************************************
// function stringreversal(str) {
//   if (str.length <= 1) return str;
//   return stringreversal(str.slice(1)) + str[0];
// }

// stringreversal("hello");

// isPalindrome solution********************************************
// function isPalindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
//   return false;
// }

// isPalindrome("racear");

// flatten array solutions ******************************************
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

flatten([1, [1, 2], [2, [3, 4]], 5]);
