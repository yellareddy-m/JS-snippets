## Call method polyfill Implementation

```js

const car = {
  color: 'red',
  company: 'Hyundai'
}

function purchaseCar(price, currency) {
  return `I have purchased ${this.color} ${this.company} car for ${currency}${price}`;
}

console.log(purchaseCar.call(car, 20000, '$'));

Function.prototype.customCall = function(context = {}, ...args) {
  if (typeof this !== 'function') {
      throw new Error('inaccurate function call');
  }
  context.fn = this;
  return context.fn(...args); // return back whatever function is returning
}

console.log(purchaseCar.customCall(car, 333, '#'));
```
