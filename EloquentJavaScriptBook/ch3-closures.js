/*
* CH3 FUNCTIONS - Closure
*/

function wrapValue(n){
  var localVariable = n;
  return function(){ return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());

console.log(wrap2());

function multiplier(factor){
  return function(number){
    return number * factor
  };
}

var twice = multiplier(2);

console.log(twice);

console.log(twice(5));
