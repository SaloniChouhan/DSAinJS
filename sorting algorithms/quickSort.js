partition = (arr, lb, ub) => {
  let pivot = arr[lb];
  let start = lb;
  let end = ub;
  while (start < end) {
    while (arr[start] <= pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }
    if (start < end) {
      swap(arr[start], arr[end]);
    }
  }
  swap(arr[lb], arr[end]);
  return end;
};

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return [right, left];
}

quickSort = (arr, lb, ub) => {
  if (lb < ub) {
    let loc;
    loc = partition(arr, lb, ub);
    quickSort(arr, lb, loc - 1);
    quickSort(arr, loc + 1, ub);
  }
  console.log(arr);
};

let arr = [10, 80, 30, 90, 40];
let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);

// ************************************************************************************
// another way of implementing using spread operator
// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[0];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// };

// let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
// console.log(quickSort(myArray));

// **********************************************************************************************
// another way of implementing using concat
// function quicksort(array) {
//     if (array.length <= 1) {
//       return array;
//     }

//     var pivot = array[0];

//     var left = [];
//     var right = [];

//     for (var i = 1; i < array.length; i++) {
//       array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//     }

//     return quicksort(left).concat(pivot, quicksort(right));
//   };

//   var unsorted = [23, 45, 16, 37, 3, 99, 22];
//   var sorted = quicksort(unsorted);

//   console.log('Sorted array', sorted);
