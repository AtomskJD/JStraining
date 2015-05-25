function countBs(string){
  return countChar(string, "b");
}

function countChar(string, char){
  var length = string.length, count = 0;
  
  while (length > 0){
    if (string.charAt(length) == char) count++;
    length--;
  }
  
  return count;
}

console.log(countBs("rabbits"));
console.log(countChar("rabbits run by rails", "l"));