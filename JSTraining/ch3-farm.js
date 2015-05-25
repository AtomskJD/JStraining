/*
* Cow anf chicken function
*/

function printFarmInventory(cows, chickens){
  var cowString = String(cows);
  while (cowString.length < 3){
    cowString = "0" + cowString;
  }
  console.log(cowString + " Cows");

  var chickensString = String(chickens);
  while (chickensString.length < 3){
    chickensString = "0" + chickensString;
  }
  console.log(chickensString + " Chickens");
}

// printFarmInventory(7, 11);

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory2(cows, chickens, pigs){
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory2(10, -7, 5);
