var http = require("http"),
  Router = require("./router"),
  ecstatic = require("ecstatic");

var fileServer = ecstatic({root: "./public"}),
  router = new Router();

http.createServer(function ( request, response ) {
  if (!router.resolve( request, response )) {
    fileServer( request, response );
  }
}).listen(8888);


function respond( response, status, data, type ) {
  response.writeHead( status, {
    "Content-type": type || "text/plain"
  });

  response.end(data);
}


function respondJSON( response, status, data ) {
  respond( response, status, JSON.stringify( data ), "application/json"
}

var talks = Object.create(null);

router.add("GET", /^\/talks\/([^\/]+)$/, function ( request, response, title ) {
  if ( title in talks ) {
    respondJSON( response, 200, talks[title]);
  } else {
    reapond (response, 404, "NO talk '" +title+ "' found");
  }
});
