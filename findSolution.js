/* Посчитать бетоновозы */

function findMix(end){
// var res = [];
  function find(cur, result) {
    // res.push(result);
    // console.log(cur, result);
    if ( cur == end ) {
      return result;
    } else if ( cur > end ) {
      return false;
    }
    else {
      return  find( cur + 9, result+"9" ) ||
              find( cur + 6, result+"6" ) ||
              find( cur + 3, result+"3" ) ||
              result+(cur - end)*-1;
    }
  }

  var res = find(0, "");
  // console.log(res);

  function countChar(string){
    var length = string.length - 1,
        counts = {  "m9": 0,
                    "m6": 0,
                    "m3": 0,
                    "also": 0 };


    while (length >= 0){
      if (string.charAt(length) == 9) counts.m9++;
      if (string.charAt(length) == 6) counts.m6++;
      if (string.charAt(length) == 3) counts.m3++;
      if (string.charAt(length) < 3) counts.m3++;
      if (string.charAt(length) < 3) counts.also++;
      length--;
    }

    return counts;
  }

  return countChar(res);
}

console.log(findMix(52));
