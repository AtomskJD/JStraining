// Превращаем массив в цепочку объектов
function arrayToList(arr){
  var obj = {};
  obj.value = arr[0];
  if (arr.length -1){
    obj.rest = arrayToList(arr.slice(1));
  }else obj.rest = null;

  return obj;
}

// Преобразуем цепной объект в массив
function listToArray(obj){
var arr = [];
  arr.push(obj.value);
  if(obj.rest){
    var tmp = listToArray(obj.rest);
    arr = arr.concat(tmp);
  }
  return arr;
}

// Добавляем новый элемент в начало цепочки
function prepend(_value, obj){
  return {value: _value, rest: obj};
}

function nth(list, pos){
  if(pos > 0){
    if (list.rest){
      return nth(list.rest, pos-1);
    } else return undefined;
  }
  else return list.value;
}


var obj = arrayToList([1,2,3,4,5]);
console.log(obj);

var arr1 = listToArray({value: "dodo", rest: {value: "toto", rest: null}});
console.log(arr1);

console.log(listToArray(obj));
var pobj = prepend("Dodo", obj);
console.log(prepend(10, prepend(20, null)));
console.log(pobj);

console.log(nth(pobj, 20), "NTH");
console.log(nth(arrayToList([10, 20, 30]), 1));
