"use strict";
var test = {
  prop: 10,
  addPropTo: function(array) {
    return array.map(function(elt) {
      return this.prop + elt;
    }, this);
  }
};
console.log(test.addPropTo([5]));


function F1(x) {this.x = x;}
var f1 = new F1("xxx");

// console.log(x);




function Person(name) { this.name = name; }
var ferdinand = new Person("Евлампий"); // ой-вэй
console.log(name);