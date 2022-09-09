
## Polyfills for array methods

### map
[MDN map documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Syntax from MDN site

```js
// Arrow function
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(element) { /* … */ })
map(function(element, index) { /* … */ })
map(function(element, index, array){ /* … */ })
map(function(element, index, array) { /* … */ }, thisArg)

```

### Polyfill implementation
#### The IIFE is for executing the definition immediately so that we can test the method in the next statement.
#### Note: Semicolon is important after IIFE, otherwise you get an error.
```js
(() => {
  Array.prototype.myMap = function(callback) {
  let res = [];
    for (let i = 0; i < this.length; i++) {
      res.push(callback(this[i], i, this));
    }
    return res;
  }
})();
[1,2,3,4].myMap(e => e * e);
```
