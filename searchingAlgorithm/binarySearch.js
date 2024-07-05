// we don't use binay search in case of unsorted array

binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === val ? middle : -1;
};

binarySearch([2, 3, 5, 6, 8, 10, 12, 15, 18, 24, 28, 31, 36], 12);

// binarySearch = (arr, val) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   while (arr[middle] !== val && left <= right) {
//     if (val < arr[middle]) right = middle - 1;
//     else left = middle + 1;
//     middle = Math.floor((left + right) / 2);
//   }

//   return arr[middle] === val ? middle : -1;
// };

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5);
