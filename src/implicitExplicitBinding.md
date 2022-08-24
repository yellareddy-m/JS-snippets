## Implicit and explicit binding

#### Simple example to demonstrate explicit binding in JS using call() method

#### same can be accomplished using bind and apply methods


```js
var obj1 = {
  name: "yella",
  greet: function() {
    console.log("Hello " + this.name)
  }
}

var obj2 = {
  name: 'reddy'
};

obj1.greet()  // prints Hello yella

obj1.greet.call(obj2);  // prints Hello reddy

const boundedFunction = obj1.greet.bind(obj2);
boundedFunction()   // prints Hello reddy

obj1.greet.apply(obj2, []) // can provide list of arguments for the called function as an array in second argument
// prints Hello reddy

```


