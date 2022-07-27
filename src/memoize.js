function memoize(fn) {
    const cacheObj = {};
    return function (...args) {
        const argProp = JSON.stringify(args);
        if (!cacheObj[argProp]) {
            cacheObj[argProp] = fn(...args);

        }
        return cacheObj[argProp];
    }
}

const multiply = async (x, y) => {
    await new Promise( resolve => setTimeout(resolve, 2000)); // 2 second delay
    return x * y;
};

const memiozedMultiply = memoize(multiply);

console.time('Before memoize')
await memiozedMultiply(1000, 1000);
console.timeEnd('Before memoize')


console.time('After memoize')
await memiozedMultiply(1000, 1000);
console.timeEnd('After memoize')
