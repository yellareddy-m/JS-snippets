## Apply method polyfill Implementation

```js

const car = {
  color: 'red',
  company: 'Hyundai'
}

function purchaseCar(price, currency) {
  return `I have purchased ${this.color} ${this.company} car for ${currency}${price}`;
}

console.log(purchaseCar.apply(car, [20000, '$']));

Function.prototype.customApply = function(context = {}, args) {
  if (typeof this !== 'function') {
      throw new Error('inaccurate function call');
  }
  if (!Array.isArray(args)) {
    throw new Error('arguments should be an array');
  }
  context.fn = this;
  return context.fn(...args); // return back whatever function is returning
}

console.log(purchaseCar.customApply(car, [333, '#']));
```
