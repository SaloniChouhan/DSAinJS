linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      console.log(i);
      return i;
    }
  }
  return -1;
};

linearSearch([4, 5, 6, 8, 19, 35, 46, 78, 90, 122, 123], 100); // no need to give sorted aray it's just values should not be repeated
