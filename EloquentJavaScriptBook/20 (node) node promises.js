var // libs
  Promise = require("promise"),
  fs = require("fs");

var readFile = Promise.denodeify( fs.readFile );
readFile("file.txt", "utf8").then(function( content ) {
  console.log( "The file contained: " + content );
}, function ( error ) {
  console.log("Failed to read file: " + error );
});
