## Bind method polyfill implementation


```js

const car = {
  color: 'red',
  company: 'Hyundai'
}

function purchaseCar(price, currency) {
  console.log(`I have purchased ${this.color} ${this.company} car for ${currency}${price}`);
}
const boundedFunc = purchaseCar.bind(car, 20000, '$');

boundedFunc();

Function.prototype.customBind = function(context = {}, ...args) {
  if (typeof this !== 'function') {
      throw new Error(`${this} cannot be bound and it's not callable`);
  }
  context.fn = this;
  return function (...newArgs) {
    context.fn(...args, ...newArgs); // return back whatever function is returning
  }
}

const customBoundedFunc = purchaseCar.customBind(car, 333, '#');
const customBoundedFunc2 = purchaseCar.customBind(car);

customBoundedFunc();

customBoundedFunc2(444, '$');

```
