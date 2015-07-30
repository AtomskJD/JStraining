// Глубокое сравнение
function deepEqual(O1, O2){
// check if object
  if((typeof(O1) == "object") && (typeof(O2) == "object")){
    for ( var prop in O1){
      // Check for symetry
      if (O2.hasOwnProperty(prop)){
        return deepEqual(O1[prop], O2[prop]);
      } else return false;
      
    }
  }
  else {
     return O1 === O2;
    }
  }


// tests
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj), "один и тот же");
// → true
console.log(deepEqual(obj, {here: 1, object: 2}), "не равные");
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}), "Похожие");
// → true