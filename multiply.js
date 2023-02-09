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