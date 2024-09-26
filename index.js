var express = require("express");
var app = express();

function main() {
  app.use(express.static(__dirname));

  app.listen(9090, function () {
    console.log("Example app listening on port 9090!");
  });
}

// exchange below line to 'window.main = main;' if using node-server.html
// as the application entry point.
main();
