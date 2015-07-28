var http = require("http"),
  url = require("url");

function start ( route, handle ) {
  http.createServer( function ( request, response ) {
    var postData = "";
    var pathName = url.parse( request.url ).pathname;
    console.log("request for " + pathName + " received.");

    request.setEncoding("utf-8");
    request.addListener( "data", function (postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '" + postDataChunk + "'.");
    });

    request.addListener("end", function () {
      route( handle, pathName, response, postData );
    });

  }).listen(8888);

  console.log("Server Started");
}

exports.start = start;
