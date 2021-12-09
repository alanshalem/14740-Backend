const http = require("http");
const https = require("https");
const fs = require("fs");

let access;
let request;

if (process.argv[2] === "http") {
  access = fs.createWriteStream("postHttp.json");
  process.stdout.write = access.write.bind(access);

  request = http.request(
    {
      method: "GET",
      hostname: "jsonplaceholder.typicode.com",
      path: "/posts",
    },
    async (response) =>
      response.on("data", (data) => process.stdout.write(`${data}\n`))
  );

  request.on("error", (error) => console.error(error));

  request.end();
} else {
  access = fs.createWriteStream("postHttps.json");
  process.stdout.write = access.write.bind(access);

  request = https.request(
    {
      method: "GET",
      hostname: "jsonplaceholder.typicode.com",
      path: "/posts",
    },
    async (response) =>
      response.on("data", (data) => process.stdout.write(`${data}\n`))
  );

  request.on("error", (error) => console.error(error));

  request.end();
}
