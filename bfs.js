function bfs(arg) {

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

console.log(bfs(graph));  // ['A', 'B', 'С', 'D', 'E', 'F', 'G']
console.log( bfs('{}')); // ошибка с кодом INVALID_ARGUMENT