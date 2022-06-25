const myMap = (inputArray, fn) => inputArray.reduce((previouseValue, currentValue) => previouseValue.concat(fn(currentValue)), []);
const multiple = (value) => value * 2;
console.log(myMap([2,3,4], multiple))
