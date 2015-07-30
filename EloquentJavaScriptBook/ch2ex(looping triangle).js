/*
  Write a loop that makes seven calls to console.log to output the following
  triangle:
  #
  ##
  ###
  ####
  #####
  ######
  #######
 */
var str = "";
while (str.length < 7){
  str = str + "#";
  console.log(str);
}

console.log("done");