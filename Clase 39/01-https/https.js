const https = require("https");

// #region GET

let options = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/posts/1",
  method: "GET",
};

let request = https.request(options, (response) => {
  console.log("GET");

  console.log(`statusCode: ${response.statusCode}\n`);

  return response.on("data", (data) => process.stdout.write(`${data}\n`));
});

request.on("error", (error) => console.error(error));

request.end();

// #endregion

// #region POST

const data = JSON.stringify({
  hola: "mundo!",
});

options = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/posts",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

request = https.request(options, (response) => {
  console.log("\nPOST");

  console.log(`statusCode: ${response.statusCode}\n`);

  return response.on("data", (data) => process.stdout.write(`${data}\n`));
});

request.on("error", (error) => console.error(error));

request.write(data);

request.end();

// #endregion
