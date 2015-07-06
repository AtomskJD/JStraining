var fs = require("fs");

// read file
fs.readFile("MOCK_DATA.txt", "utf8", function( error, text ) {
  if ( error ) {
    throw error;
  }
  console.log("IN FILE:\n", text);
});

// write in file
fs.writeFile("writeFileTest.txt", "Node write this\n", function( error ) {
  if ( error ) console.log( "Произошла ошибка:", error);
  else console.log("Сохронил");
});
