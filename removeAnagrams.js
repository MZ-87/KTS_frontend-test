function removeAnagrams(arr) {
  let obj = {};


  try {
    if (args.length < 2) {
        throw new Error('INVALID_ARGUMENTS_COUNT');
    }
    for (let arg of args) {
        if (typeof arg !== 'number') {
            throw new Error('INVALID_ARGUMENT');
        }
    }
    for (let arg of args) sum += arg;
    return sum;
} catch (e) {
    return e;
}


  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

console.log(removeAnagrams(['cat', 'act', 'arc']));
console.log(removeAnagrams(['car', 'arc']));
console.log(removeAnagrams('str'));
console.log(removeAnagrams(['str', 5]));