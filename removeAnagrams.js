function removeAnagrams(arr) {

  try {
    if (!Array.isArray(arr)) {
      throw new Error('INVALID_ARGUMENT');
    }
    for (let word of arr) {
      if (typeof word !== 'string') {
        throw new Error('INVALID_ELEMENT_IN_ARRAY');
      }
    }

    let sortedArr = [];
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split('').sort().join('');
      // console.log(sorted);
      sortedArr.push(sorted);
      // map.set(sorted, word);
    }
    console.log(sortedArr);
    for (let i = 0; i < sortedArr.length; i++) {
      console.log('loop 1 start');
      console.log(sortedArr[i]);
      for (let j = 0; j < sortedArr.length; j++) {
        console.log('loop 2 start');
        console.log(sortedArr[j]);
        if (sortedArr[i] !== sortedArr[j]) {
          uniqueArr.push(sortedArr[i])
          console.log(`unique array: ${uniqueArr}`);
        } else {
          break;
        }
      }
    }
    console.log(uniqueArr);
    return uniqueArr;
  } catch (e) {
    return e;
  }
}

// console.log(removeAnagrams(['cat', 'arc', 'act']));
console.log(removeAnagrams(['tree', 'eetr', 'map', 'road', 'doar']));
// console.log(removeAnagrams(['car', 'arc']));
// console.log(removeAnagrams('str'));
// console.log(removeAnagrams(['str', 5]));

//Реализуйте функцию removeAnagrams, которая принимает массив строк и удаляет из данного массива строки, являющиеся анаграммами.