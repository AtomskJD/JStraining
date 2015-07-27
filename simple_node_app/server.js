var http = require("http"),
  url = require("url");

function start ( route, handle ) {
  http.createServer( function ( request, response ) {
    var pathName = url.parse( request.url ).pathname;
    console.log("request for " + pathName + " received.");

    route( handle, pathName, response );

  }).listen(8888);

  console.log("Server Started");
}

exports.start = start;
