function removeAnagrams(arr) {
  let map = new Map();
  let sortedArr = [];

  try {
    if (!Array.isArray(arr)) {
      throw new Error('INVALID_ARGUMENT');
    }
    for (let word of arr) {
      if (typeof word !== 'string') {
        throw new Error('INVALID_ELEMENT_IN_ARRAY');
      }
    }

    // for (let word of arr) {
    //   let sorted = word.toLowerCase().split('').sort().join(''); 
    //   map.set(sorted, word);
    // }

    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split('').sort().join('');
      sortedArr.push(sorted);
      console.log(sortedArr);
      map.set(sorted, word);
    }
    return Array.from(map.values());
  } catch (e) {
    return e;
  }
}

console.log(removeAnagrams(['cat', 'act', 'arc']));
console.log(removeAnagrams(['car', 'arc']));
console.log(removeAnagrams('str'));
console.log(removeAnagrams(['str', 5]));