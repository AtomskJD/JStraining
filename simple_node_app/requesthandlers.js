var exec = require("child_process").exec;

function start (response) {
  console.log("Request handler START was called");

  exec("ls -lha", function ( error, stdout, stderr ) {
    response.writeHead( 200, {"Content-type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

function upload (response) {
  console.log("Request handler UPLOAD was called");
  response.writeHead( 200, {"Content-type": "text/plain"});
  response.write("Hello UPLOAD");
  response.end();
}

exports.start = start;
exports.upload = upload;
