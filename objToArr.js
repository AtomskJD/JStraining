var arrayLikeObj = {0: "one", 1: "two", 2: "three", length: 3};
var getReal = Array.prototype.slice.call(arrayLikeObj, 0);
console.log(getReal);
