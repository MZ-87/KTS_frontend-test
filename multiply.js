function multiply(...args) {

    try {
        for (let arg of args) {
            if (typeof arg !== 'number') {
                throw new Error('INVALID_ARGUMENT');
            }
        }

        return sortedStr;
    } catch (e) {
        return e;
    }
}


const multiplyByTen = multiply(10);
console.log(multiplyByTen(2));   // 20
const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3));   // 6
// const multiplyByTwo = multiply(["two"]); //ошибка с кодом INVALID_ARGUMENT
// const multiplyByTwo = multiply(2);
console.log(multiplyByTwo('3'));   // ошибка с кодом INVALID_ARGUMENT


//умножение с частичным применением