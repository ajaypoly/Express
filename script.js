const http = require("http");
const fs = require("fs");
const path = require("path");

 const server=http
  .createServer((req, res) => {
    res.writeHead(200,{'Context-type':"applicatin"})
  })


  const PORT =3001;


  server.listen(PORT,console.log(`server is running on ${PORT}`))