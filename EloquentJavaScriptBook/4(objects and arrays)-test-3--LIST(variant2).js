// Оу фак да как же это круто
function arrayToList(arr){
  var rest = null;
  for (var i = arr.length; i > 0; i--){
console.log(i);
    rest = {value: arr[i-1], rest};
  }
  return rest;

}


function listToArray(obj){
var arr = [];
  while (obj){
    arr.push(obj.value);
    obj = obj.rest;
  }
  return arr;

}




// TESTs

var obj = arrayToList([1,2,3,4,5]);
console.log(obj, "OBJECT");


var arr1 = listToArray({value: "dodo", rest: {value: "toto", rest: null}});
var arr = listToArray(obj);
console.log(arr1);
console.log(arr);
