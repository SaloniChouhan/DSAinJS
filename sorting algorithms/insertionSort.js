insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    console.log(currentValue);
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      console.log(arr[j + 1], arr[j]);
      console.log(arr);
    }
    arr[j + 1] = currentValue;
    console.log(arr);
  }
  console.log(arr);
  return arr;
};

insertionSort([2, 1, 9, 76, 4]);
//             j  i
//                cv
//          j
