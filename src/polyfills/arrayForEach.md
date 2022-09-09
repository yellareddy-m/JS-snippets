
## Polyfills for array methods

### forEach
[MDN forEach documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### Syntax from MDN site

```js
// Arrow function
forEach((element) => { /* … */ })
forEach((element, index) => { /* … */ })
forEach((element, index, array) => { /* … */ })

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(element) { /* … */ })
forEach(function(element, index) { /* … */ })
forEach(function(element, index, array){ /* … */ })
forEach(function(element, index, array) { /* … */ }, thisArg)

```

### Polyfill implementation
#### The IIFE is for executing the definition immediately so that we can test the method in the next statement.

```js
(() => {
  Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
})();

[1,2,3,4].myForEach(e => {console.log(e)});

```
