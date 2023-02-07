const sum = (...args) => {
    let sum = 0;


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
        console.log(e);
    }
};

// export default sum;

console.log(sum(1, 2, 3, 5,'6'));