function getNumberProps(arg) {

    try {
        
            if (typeof arg !== 'object') {
                throw new Error('INVALID_ARGUMENT');
            }
       

        return sortedStr;
    } catch (e) {
        return e;
    }
}


console.log(getNumberProps({ a: 1, c: 1, b: { c: 2, d: 1, e: '1' }, m: 3 }));  // ['a', 'c', 'c', 'd', 'm']
console.log(getNumberProps('{ a: 1, b: { e: 4}}'));  //ошибка с кодом INVALID_ARGUMENT


//Реализуйте функцию getNumberProps, которая принимает в качестве аргумента объект, 
// свойствами которого могут быть другие объекты с неограниченным уровнем вложенности, 
// и возвращает отсортированный массив названий всех численных свойств исходного и вложенных объектов.