function testClosure(){
  console.log("1:: closure start");
  var x = 1111;
  return function(){
    console.log("3:: end part");
    return "Closure ENDS" + x;
  }
}


console.log("0:: All start");
var test = testClosure();
console.log("2:: тут вызов внутренней функции");
console.log(test());
