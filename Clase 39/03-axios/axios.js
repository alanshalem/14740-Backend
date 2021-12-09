const axios = require("axios").default;

// #region GET

axios
  .get("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then((response) => {
    console.log("GET 1!");

    return console.log(response.data[0]);
  })
  .catch((error) => console.error(error));

axios
  .get("https://jsonplaceholder.typicode.com/comments", {
    params: {
      postId: 2,
    },
  })
  .then((response) => {
    console.log("GET 2!");

    return console.log(response.data[0]);
  })
  .catch((error) => console.error(error));

(async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/3"
    );

    console.log("GET 3!");

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
})();

// #endregion

// #region Multiple

const get1 = () => axios.get("https://jsonplaceholder.typicode.com/posts/4");

const get2 = () =>
  axios.get("https://jsonplaceholder.typicode.com/posts/5", {
    params: {
      ID: 12345,
    },
  });

Promise.all([get1(), get2()]).then((results) =>
  console.log(
    `GET 4: ${JSON.stringify(results[0].data)} | GET 5: ${JSON.stringify(
      results[1].data
    )}`
  )
);

// #endregion

// #region POST

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    nombre: "BTC",
    apellido: "100k",
  })
  .then((response) => console.log("POST", response.data))
  .catch((error) => console.error(error));

// #endregion
