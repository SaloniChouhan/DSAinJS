getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

digiCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digiCount(nums[i]));
  }
  return maxDigits;
};

radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBucket[digit].push(nums[i]);
    }
    console.log(digitBucket);
    nums = [].concat(...digitBucket);
    console.log(nums);
  }
  return nums;
  //   console.log(maxDigitCount);
};

radixSort([23, 345, 5467, 12, 2345, 9]);
