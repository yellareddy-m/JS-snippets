

## Polyfills for array methods

### reduce
[MDN filter documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Syntax from MDN site

```js
// Arrow function
reduce((previousValue, currentValue) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )

reduce((previousValue, currentValue) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { /* … */ })
reduce(function(previousValue, currentValue, currentIndex) { /* … */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ })

reduce(function(previousValue, currentValue) { /* … */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex) { /* … */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ }, initialValue)

```

### Polyfill implementation
#### The IIFE is for executing the definition immediately so that we can test the method in the next statement.
#### Note: Semicolon is important after IIFE, otherwise you get an error.
```js
(() => {
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      if (accumulator === undefined) {
        accumulator = this[i];
      } else {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  }
})();
[1, 2, 3, 4].myReduce((previousValue, currentValue) => previousValue + currentValue, 0);
```
