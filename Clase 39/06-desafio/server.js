const express = require("express");

const app = express();
const PORT = +process.argv[2] || 8080;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

// #region

app.get("/", (_request, response) =>
  response.status(200).json({ FyH: new Date().toLocaleString() })
);

// #endregion
