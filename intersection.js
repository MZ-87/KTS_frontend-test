const intersection = (...args) => {
    let result = [];

    try {
        if (args.length < 2) {
            throw new Error('INVALID_ARGUMENTS_COUNT');
        }
        for (let arg of args) {
            if (!Array.isArray(arg)) {
                throw new Error('INVALID_ARGUMENT');
            } else {
                arg.forEach(el => {
                    if (typeof el !== 'number') {
                        throw new Error('INVALID_ELEMENT_IN_ARRAY');
                    }
                });
            }
        }

        for (let i = 0; i < args[0].length; i++) {
            if (args[1].includes(args[0][i])) result.push(args[0][i]);
        }
        return result;
    } catch (e) {
        return e;
    }

};

// export default intersection;

console.log(intersection([1], [2]));
console.log(intersection([1, 2], [3, 2, 1]));
console.log(intersection ());
console.log(intersection([], '[]'));
console.log(intersection([], [1, '2']) );

//нужно использовать методы let intersection = arrA.filter(x => arrB.includes(x));