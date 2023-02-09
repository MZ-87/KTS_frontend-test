function planEvent(arg1, arg2) {

    try {
        if (typeof arg1 !== 'function' || typeof arg2 !== 'number') {
                throw new Error('INVALID_ARGUMENT');
            }        

        return sortedStr;
    } catch (e) {
        return e;
    }
}


const f = () => 'Done';
const result = await planEvent(f, 3000); //Через 3 секунды
console.log(result); // 'Done'
const result2 = await planEvent('str', 3000); // ошибка с кодом INVALID_ARGUMENT
const result3 = await planEvent(() => 'Done', '3000'); // ошибка с кодом INVALID_ARGUMENT



// Реализуйте функцию planEvent, которая планирует вызов функции cb через некоторое 
// время(timeout) и возвращает Promise с результатом выполнения функции cb. 
// В случае timeout <= 0 вызов должен произойти сразу же.