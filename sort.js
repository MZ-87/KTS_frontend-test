function sort(arg) {

    try {
        if (typeof arg !== 'string') {
            throw new Error('INVALID_ARGUMENT');
        }

        let newWordArr = [];
        let wordArr = arg.toLowerCase().split(' ');

        for (let word of wordArr) {
            newWordArr.push(word.split('').sort().join(''));
        }
        sortedStr = newWordArr.join(' ');
        return sortedStr;
    } catch (e) {
        return e;
    }
}

console.log(sort('Hello world'));
console.log(sort('привет школа Metaclass'));
console.log(sort('1234 111'));
console.log(sort(11));


//Реализуйте функцию sort, которая принимает строку, состоящую из слов, разделенных пробелами. 
// В каждом слове предложения она сортирует буквы в порядке кодовых точек Unicode, а слова по количеству букв в них, 
// и возвращает результат в виде строки. Если в слове попадается буква в верхнем регистре, она должна быть приведена к нижнему.