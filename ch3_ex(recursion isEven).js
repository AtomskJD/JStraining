function isEven(n){
  if (n<0) n*=-1;
  if (n === 0 ){
    return true;
  }
  else if (n === 1){
    return false;
  }
  else return isEven(n-2);
}

console.log(50, isEven(50));
console.log(75, isEven(75));
console.log(-1, isEven(-1));
/*
Exception: too much recursion
@Scratchpad/2:3
*/