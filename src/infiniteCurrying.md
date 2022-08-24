## Infinite currying

#### Simple addition function example for implementing infinite currying
#### If you don't add the last function call braces () then a function will be returned.

```js
function add (a) {
    return function (b) {
        if (b) {
            return add(a + b);
        }
        return a;
    }
}

console.log(add(5)(2)(4)(8)()) // infinite 
```
