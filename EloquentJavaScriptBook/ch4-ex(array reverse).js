/* Array reverse */

function reverseArray(arr){
var result = [];
  for(var i = arr.length-1; i >= 0; i--){
    result.push(arr[i]);
  }
  return result;
}


function reverseArrayInPlace(arr){
var result = [];
  var end, start, tmp;
  end = arr.length-1;
  start = 0;
  for(var i = start; i <= end/2; i++){
    // сохраняем начало    
    tmp = arr[start+i];
    
    // переносим конец в начало
    arr[start+i] = arr[end-i];
    
    // переносим сохраненное начало в конец
    arr[end-i] = tmp;
    
  }
  return arr;
}

//console.log(reverseArray([1,2,3,4,5,6]));
var arra = [1,2,3,4,5];
console.log(arra);
reverseArrayInPlace(arra);

console.log(arra);
