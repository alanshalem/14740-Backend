const got = require("got").default;

(async () => {
  try {
    const response = await got("https://httpbin.org/get");

    console.log(response.body);
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
  try {
    const { body } = await got.post("https://httpbin.org/post", {
      json: {
        hola: "mundo!",
      },
      responseType: "json",
    });

    console.log(body.data);
  } catch (error) {
    console.error(error);
  }
})();
