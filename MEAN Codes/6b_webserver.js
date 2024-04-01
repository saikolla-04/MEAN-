const http = require("http");

var server = http.createServer((req, res) => {
    res.write("Hi I''m Charan! I've Created my first server!");
    res.end();
  });
  server.listen(3099);
  console.log("Server started... Running on localhost:3099");
  