var http = require("http"),
request = http.request({
  hostname: "localhost",
  port: 8000,
  method: "POST"
}, function( response ) {
  response.on("data", function( chunk ) {
    process.stdout.write( chunk.toString());
  });
});
request.end("Hello server");
