/* принимеет массив возвращает его сумму */
function sum(arr){
var result = 0;  
  for (var i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}

/* принимает диапазон и возвращает массив значений с шагом */
function range(x, y, step = 1){
  var result = [];
  if (step > 0){
    for(x; x < y; x += step){
      result.push(x);
    }
  }
  
  else if(step<0){
    return range(y, x, -step);
  }
  
  else{
    return range(x,y,1);
  }
  return result;
}


console.log(range(15, 7, -2));
console.log(sum(range(15,7,-2)));
