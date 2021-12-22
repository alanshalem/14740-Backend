const express = require("express");
const cors = require("cors");

const app = express();

// #region listen

const PORT = +process.argv[2] || 8080;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

// #endregion

// #region middleware

const corsOptions = {
  origin: "http://localhost:8080/",
  optionsSuccessStatus: 200,
  method: "GET, PUT",
};

const corsOptionsDelegate = (request, callback) => {
  const allowList = ["http://www.algo.com", "http://www.example.com"];
  const isDomainAllowed = allowList.indexOf(request.header.origin) !== -1;
  const isExtensionAllowed = request.path.endsWith(".jpg");
  if (isDomainAllowed && isExtensionAllowed) {
    return callback(null, {
      origin: true,
    });
  }

  return callback(null, {
    origin: false,
  });
};

app.use(cors(corsOptions));
// app.use(cors(corsOptionsDelegate));

// #endregion

app.get("/", (_request, response) => response.send("Hola mundo!"));

app.get(
  "/cors",
  // cors(corsOptions),
  (_request, response) => response.send("Hola mundo!")
);
