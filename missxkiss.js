(function(num){
var output;
  for (var i = 1; i <= num; i++) {
    output = '';
    if (i%3 === 0) {
      output += "Miss";
    }
    if (i%5 === 0) {
      output += "KISS";
    }

    console.log(output || i);
  }
})(100);
