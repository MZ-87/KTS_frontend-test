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
        return e;
    }
};

// export default sum;
console.log(sum(1));
console.log(sum(1, 2, 3, 5,'6'));
console.log(sum(2,3,5));


// Реализуйте функцию sum, которая принимает произвольное количество аргументов и возвращает их сумму.