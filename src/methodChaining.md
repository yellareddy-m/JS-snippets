## Method chaining

#### Sample example illustrating method chaining.

```js
const calc = {
  total: 0,
  add: function(a) {
    this.total += a;
    return this;
  },
  multiply: function(a) {
    this.total *= a;
    return this;
  },
  substract: function(a) {
    this.total -= a;
    return this;
  }
}


const result = calc.add(3).multiply(5).substract(5).add(10);  

console.log(result.total); // should log 20

```
