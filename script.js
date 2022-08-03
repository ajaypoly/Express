const http = require("http");

http
  .createServer((req, res) => {
    res.write("THis is node js");
    res.end();
    console.log(req.url);
  })
  .listen(3001, () => console.log("server is run"));
