var http = require("http"),
  request;
request = http.request({
  hostname: "eloquentjavascript.net",
  path: "/20_node.html",
  method: "GET",
  headers: {Accept: "text/html"}
}, function( response ) {
  console.log("Service answer: ", response.statusCode);
  console.log(response.headers);
});

request.end();
