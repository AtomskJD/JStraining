var month = function(){
  var months = ['январь', "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
  return {
    name: function(monthNumber){  return months[monthNumber];},
    number: function(monthName){  return months.indexOf(monthName);},
    months: months
  };
}();
console.log(month.name(0));
console.log(month.number("июль"));

console.log(new month.name(0));
