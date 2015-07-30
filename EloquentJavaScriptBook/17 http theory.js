// XMLHttpRequest

var req = new XMLHttpRequest();

req.open("GET", "/", false);
req.send(null);
console.log(req.status, req.statusText);
console.log( req.getResponseHeader("content-type") );
// console.log(req.responseText);

// Асинхронн~~~

var reqA = new XMLHttpRequest();
reqA.open( "GET", "/", true);
reqA.addEventListener( "load", function() {console.log("DONE", reqA.status);} );

reqA.send(null);

// Access-Control-Allow-Origin: *

function backgroundReadFile( url, callback ) {
  var req = new XMLHttpRequest();
  req.open( "GET", url, true );
  req.addEventListener( "load", function() {
    if ( req.status < 400 ) {
      callback( req.responseText );
    }
  });
  
  req.send( null );
}