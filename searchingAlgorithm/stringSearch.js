// search some pattern in given long string
searchPattern = (str, pattern) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) {
        break;
      }
      if (j === pattern.length - 1) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
};

searchPattern("womgdeowomg", "omg");
//  omg
