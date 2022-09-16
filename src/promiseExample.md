## Working of promises and async, await example 


```js

//  The output of this would be "API2 called"
// "Promise pending (API2)"
// "API1 called"
// "Promise pending (API1)"
// API2 resolved
// API1 resolved
// API3 called
// API3 resolved

function callAPI1() {
    console.log("API1 called");
    return new Promise((resolve, reject) => setTimeout(() => resolve("API1 resolved"), 1000))
}

function callAPI2() {
    console.log("API2 called");
    return new Promise((resolve, reject) => setTimeout(() => resolve("API2 resolved"), 1000)) // delay 2seconds
}

function callAPI3() {
    console.log("API3 called");
    return new Promise((resolve, reject) => setTimeout(() => resolve("API3 resolved"), 1000))
}

async function test() {
    const res2 = callAPI2();
    //console.log(res2);

    callAPI1().then(
        res => {
            console.log(res);
            callAPI3().then(console.log).catch(console.log)
        }
    ).catch(error => console.log(error))


    console.log(await res2);
}

test()
```
