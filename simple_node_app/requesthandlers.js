// var exec = require("child_process").exec;
var querystring = require("querystring"),
  fs = require("fs"),
  formidable = require("formidable");

function start ( response, postData ) {
  console.log("Request handler START was called");

  var body = '<html>' +
  '<head>'+
  '<meta http-equip="Content-type" content="text/html; charset=utf-8">'+
  '</head>' +
  '<body>' +
  '<form action="/upload" method="post" enctype="multipart/form-data">' +
  '<input type="file" name="upload">' +
  '<input type="submit" value="Upload FILE" />' +
  '</form>' +
  '</body>' +
  '</html>';

  response.writeHead( 200, {"Content-type": "text/html"});
  response.write( body );
  response.end();
}


function upload ( response, request ) {
  console.log("Request handler UPLOAD was called");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse( request, function ( error, fields, files ) {
    console.log("parsing done");

    // can throw errors in W system
    fs.rename(files.upload.path, "/tmp/test.png", function (err) {
      if (err) {
        fs.unlink("/tmp/test.png", function ( erroz ) {
          console.log( erroz );
        });
        fs.rename(files.upload.path, "/tmp/test.png", function () {
          console.log(files.upload.path);
        });
      }
    });
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("received image: <br>");
    response.write("<img src='/show'>");
    response.end();
  });
}


function show( response, postData ) {
  console.log("Request handler 'show' was called.");
  fs.readFile("/tmp/test.png", "binary", function (error, file) {
    if (error) {
      response.writeHead( 500, {"Content-type": "text/plain"});
      response.write( error + "\n");
      response.end();
    } else {
      response.writeHead( 200, {"Content-type": "image/png"});
      response.write( file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
