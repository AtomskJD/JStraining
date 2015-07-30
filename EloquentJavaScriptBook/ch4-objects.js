/*
* Objects
*/

var day1 = {
  suqirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"],
  "DO DO": "DODO"
};

console.log(day1.suqirrel);
console.log("in day 1 ", "wolf" in day1);


day1.wolf = false;
console.log("in day 1-2 ", "wolf" in day1);

console.log(day1.wolf);


console.log(day1["DO DO"]);

console.log("typeof events: ", typeof(day1.events))