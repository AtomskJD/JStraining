/*
 Write a program that creates a string that represents an 8 × 8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a “#” character. The characters should form a chess
board.

var size = 8;
var board = "";
for (var y = 0; y < size; y++) {  
  for (var x = 0; x < size; x++) {
   if ((x + y) % 2 == 0)
    board += "#";    
   else      
    board += " ";
   }
   board += "\n";
 }
console.log(board);
 */
var size = 10, line = "\n";
for (var x = 0; x < size; x++){
  for (var y = 0; y < size; y++){
    if (((y%2) && (x%2)) || (!(y%2) && !(x%2))){
      line = line + "#";
    } else {
      line = line + " ";
    }
  }
  line += "\n";
}
console.log(line);