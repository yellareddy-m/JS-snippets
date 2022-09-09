
## Polyfills for array methods

### filter
[MDN filter documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### Syntax from MDN site

```js
// Arrow function
filter((element) => { /* … */ } )
filter((element, index) => { /* … */ } )
filter((element, index, array) => { /* … */ } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function(element) { /* … */ })
filter(function(element, index) { /* … */ })
filter(function(element, index, array){ /* … */ })
filter(function(element, index, array) { /* … */ }, thisArg)

```

### Polyfill implementation
#### The IIFE is for executing the definition immediately so that we can test the method in the next statement.
#### Note: Semicolon is important after IIFE, otherwise you get an error.
```js
(() => {
  Array.prototype.myFilter = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        res.push(this[i]);
      }
    }
    return res;
  }
})();
[1,2,3,4].myFilter(e => e > 2);
```
