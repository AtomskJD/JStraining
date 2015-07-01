// XMLHttpRequest

var req = new XMLHttpRequest();

req.open("GET", "/", false);
req.send(null);
console.log(req.status, req.statusText);
console.log( req.getResponseHeader("content-type") );
// console.log(req.responseText);
