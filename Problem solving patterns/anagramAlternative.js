function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let val of str1) {
    lookup[val] = (lookup[val] || 0) + 1;
  }

  //   for (let i = 0; i < str1.length; i++) {
  //     let letter = str1[i];
  //     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  //   }
  console.log(lookup);

  for (let val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }
  //   for (let i = 0; i < str2.length; i++) {
  //     let letter = str2[i];
  //     if (!lookup[letter]) {
  //       return false;
  //     } else {
  //       lookup[letter] -= 1;
  //     }
  //   }
  console.log("it is an anagram");
  return true;
}

isAnagram("silent", "listen");
