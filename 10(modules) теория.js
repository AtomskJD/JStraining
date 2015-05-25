/* Пространства имен*/
// Изоляция ЗАМЫКАНИЕМ
// var dayName = function(){
//   var names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//   return function(number){return names[number];};
// }();
//
// console.log(dayName(4));

// самовызов без вызврата кому чего, никому ничего не должен
// (function() {
//   function square(x) { return x*x; }
//   var hundred = 100;
//
//
//   console.log(square(hundred));
// })();

// возврат объекта с функциями
// var weekDay = function(){
//   var names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//
//   return {
//     name: function(number){ return names[number]; },
//     number: function(name){ return names.indexOf(name); }
//   };
// }();
//
// console.log(weekDay.name(weekDay.number("Суббота")));

// (function (exports) {
//   var names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//   exports.name = function(number){
//     return names[number];
//   };
//
//   exports.number = function(name){
//     return names.indexOf(name);
//   };
//
// })(this.weekDay = {} );
// console.log(weekDay.name(weekDay.number("Суббота")));

// ////////////////////////////
// function evalAndRun(myCode) {
//   eval(myCode);
//   return x;
// }
//
// console.log(evalAndRun('var x = 15'));
//
//
// var plusOne = new Function("n", "return n+1");
// console.log(plusOne(4));


// function require(name){
//   var code = new Function("exports", readFile(name));
//   var exports = {};
//   code(exports);
//   return exports;
// }
//
// console.log(require('weekDay').name(1));


function require(name){
  if (name in require.cache) {
    return reqire.cache[name];
  }

  var code = new Function("exports", "module", readFile(name));
  var exports = {};
  var module = {exports: exports};
  code(exports, module);

  require.cache[name] = module.exports;
  return module.exports;
}

require.cache = Object.create(null);
