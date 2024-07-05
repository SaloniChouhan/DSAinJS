// Array section--------------------------------------------------------------
// function leetcode(nums) {
// let frequencyCounter = {};
// let count = 0;
// for (let val of nums) {
//   count += frequencyCounter[val] || 0;
//   frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;

// }
// console.log(count);
// return count;

//   let frequencyCounter = {};
//   for (let val of nums) {
//     frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
//   }
//   console.log(frequencyCounter);
//   for(key in frequencyCounter) {

//   }

//   const n = nums.length;
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (nums[i] == nums[j] && i < j) {
//         count++;
//       }
//     }
//   }
//   console.log(count);
//   return count;
// }

// leetcode([1, 2, 3, 1, 1, 3]);

// String section-------------------------------------------------------------------------
//  score of string problem in leetcode string section
// scoreOfString = (s) => {
//   let res = 0;
//   for (let i = 0; i < s.length - 1; i++) {
//     res += Math.abs([s.charCodeAt(i)] - [s.charCodeAt(i + 1)]);
//   }
//   console.log(res);
//   return res;
// };

// scoreOfString("hello");

// hello
// h                      e                    l                         l                o
// 104                    101                  108                       108              111
// s[i=0]                 s[j=1]
// 4                      s[i=1]              s[j=2]
// res                      7

// permutation difference between 2 strings leetcode string section 3146
// findpermutationdifference = (s, t) => {

//     let lookup1 = {};
//     let lookup2 = {};
//     let result = 0;

//     for(let i = 0; i < s.length; i++) {
//       lookup1[s[i]] = (lookup1[i] || 0) + i;
//     }

//     for(let j = 0; j < t.length; j++) {
//       lookup2[t[j]] = (lookup2[j] || 0) + j;
//     }

//     for(let val in lookup1){
//       if(val in lookup2){
//         result += Math.abs(lookup1[val] - lookup2[val])
//       }

//     }

//     console.log(result);
//     return result;

// }

// findpermutationdifference("abcde", "edbac");

// defanging an IP address 1108
// defangingIP = (str) => {
//   let result = {};
//   for(let val of str) {
//     // if(val !== "."){
//     //   result += val;
//     // }
//     // else{
//     //   result += val.replace(".", "[.]");
//     // }

//     val !== "." ? result += val : result += val.replace(".", "[.]");

// }
//   console.log(result);
//   return result;
// };

// defangingIP("127.10.12.123.23");

// final value of variable after performing operation 2011
// finalValueofOperations = (arr) => {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] == "--X" || arr[i] == "X--" ? (result -= 1) : (result += 1);
//     // if(arr[i] == ("++X" || "X++")){
//     //   temp
//     // }
//   }
//   console.log(result);
//   return result;
// };

// finalValueofOperations(["X++", "++X", "--X", "X--"]);

// find words containing characters 2942
// findWordsContaining = (words, x) => {
//   let index = [];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].includes(x)) {
//       index.push(i);
//     }
//   }
//   console.log(index);
//   return index;
// };

// findWordsContaining(["carrot", "apple", "litchi", "orange"], "a");

// 2 poniters -------------------------------------------------------------
// count pairs whose sum is less than target 2824
// var countPairs = function (nums, target) {
//   let i = 0;
//   let j = nums.length - 1;
//   let count = 0;
//   // for (i = 0; i < nums.length; i++) {
//   //   if (nums[i] + nums[j] < target) {
//   //     count++;
//   //     j++;
//   //   }
//   // }
//   while (i < j) {
//     let sum = nums[i] + nums[j];
//     if (sum < target) {
//       i++;
//       return count++;
//     } else {
//       j--;
//     }
//     console.log(count);
//     return count;
//   }
// };

// countPairs([-1, 1, 2, 3, 1], 2);

// Merge strings alternatively 1768
function mergeAlternatively(word1, word2) {
  let result = "";
  let longestString;
  let shortestString;
  if (word1.length === 0 || word2.length === 0) return;

  if (word1.length > word2.length) {
    longestString = word1;
    shortestString = word2;
  } else {
    longestString = word2;
    shortestString = word1;
  }

  for (var i = 0; i < shortestString.length; i++) {
    let ptr1 = word1[i];
    let ptr2 = word2[i];
    result = result.concat(ptr1.concat(ptr2));
  }
  for (var j = i; i < longestString.length; i++) {
    result = result.concat(longestString[i]);
  }

  return result;
}

// word1 = "abc" a p b
// word2 = "pqrs"
//  i < 4

mergeAlternatively("abc", "pqrs");
