// function countuniques(arr) {
//   const uniques = {};

//   for (let val of arr) {
//     uniques[val] = (uniques[val] || 0) + 1;
//   }
//   console.log(Object.keys(uniques).length);
// }

// countuniques([
//   1, 3, 2, 5, 6, 7, 3, 4, 4, 4, 6, 6, 6, 7, 77, 7, 7, 3, 1, 46, 45, 46, 1, 1,
// ]);

// alternative solution with sorted array
function countuniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
  return i + 1;
}

countuniqueValues([
  1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 10, 11,
]);
