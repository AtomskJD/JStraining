// var exec = require("child_process").exec;
var querystring = require("querystring");

function start (response) {
  console.log("Request handler START was called");

  var body = '<html>' +
  '<head>'+
  '<meta http-equip="Content-type" content="text/html; charset=utf-8">'+
  '</head>' +
  '<body>' +
  '<form action="/upload" method="post">' +
  '<textarea name="text" rows="20" cols="60"></textarea>' +
  '<input type="submit" value="Submit text">' +
  '</form>' +
  '</body>' +
  '</html>';

  response.writeHead( 200, {"Content-type": "text/html"});
  response.write( body );
  response.end();
}

function upload ( response, postData ) {
  console.log("Request handler UPLOAD was called");
  response.writeHead( 200, {"Content-type": "text/plain"});
  response.write( "You Upload: " + querystring.parse(postData).text );
  response.end();
}

exports.start = start;
exports.upload = upload;
