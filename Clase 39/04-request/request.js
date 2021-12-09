// ! Deprecado
const request = require("request");

request(
  "https://jsonplaceholder.typicode.com/posts/1",
  (error, response, body) => {
    console.error(error);
    console.log(`statusCode ${response ? response.statusCode : "???"}`);
    console.log(body);
  }
);
