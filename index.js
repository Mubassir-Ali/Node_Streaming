const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.log(err);
  //     res.end(data.toString());
  //   });

  //2nd way
  // Create a readable stream
  // Handle stream events => data, end and error

  //   const rstream = fs.createReadStream("input.txt");

  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });

  //   rstream.on("end", () => {
  //     res.end();
  //   });

  //   rstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("file not found");
  //   });

  // 3rd way using Pipe

  const rstream = fs.createReadStream("input.txt");

  rstream.pipe(res);
});

const PORT = 8000;
const HOST = "127.0.0.1";

server.listen(PORT, HOST);

console.log(`Server is Running on ${HOST}: ${PORT}`);
