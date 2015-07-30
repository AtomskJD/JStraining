var exec = require("child_process").exec;

exec("du *", function (error, stdout, stderr) {
  console.log(stdout);
});
