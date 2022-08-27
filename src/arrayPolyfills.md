## Polyfills for array methods

### forEach
[MDN forEach documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```js
Array.prototype.customForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
}
```
