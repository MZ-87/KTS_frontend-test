function curry(f) { // curry(f) выполняет каррирование
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // использование
  const pow = (x, n) => {
    let result = x;
    try {
        if (typeof x !== 'number' || typeof n !== 'number') {
            throw new Error('INVALID_ARGUMENT');
        }
        for (let i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    } catch (e) {
      return e;
    }
};
  
  let curriedPow = curry(pow);
  console.log(curriedPow(2)(3));
  console.log(pow(10,3));
  console.log(curriedPow(2)('3'));
  console.log(pow('10',3));