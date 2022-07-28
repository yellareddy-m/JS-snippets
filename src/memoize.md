## Memoize function

#### Function which can be used to memoize any function result, thereby helping in faster computation when the same set of parameters are passed to the function

```js
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
```
