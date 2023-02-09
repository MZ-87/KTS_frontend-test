function dfs(arg) {

    try {
        
            if (typeof arg !== 'object') {
                throw new Error('INVALID_ARGUMENT');
            }
       

        return sortedStr;
    } catch (e) {
        return e;
    }
}



const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: [],
    F: [],
    G: [],
};

console.log(dfs(graph));  // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
console.log(dfs('{}'));  // ошибка с кодом INVALID_ARGUMENT

// Обход дерева в глубину
// Реализуйте функцию dfs, которая принимает в качестве аргумента объект, отражающий небинарное дерево 
// (узел может иметь больше двух потомков) и возвращает массив узлов, соответствующий обходу в глубину. 
// Обход осуществляется слева направо (по возрастанию индекса в массиве).