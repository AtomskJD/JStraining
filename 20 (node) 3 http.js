var http = require("http"),
  server = http.createServer(function( request, response ) {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<h1>It's a live</h1><p>but no Apache insile</p><p>On address <code>" + request.url + "</code></p>");
    response.end();
  });
  server.listen(8000);
