const express = require("express");

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () =>
  console.log(`Server listen on port ${PORT}`)
);

server.on("error", (error) => console.error(error));

app.use(express.static("carpeta1"));
app.use(express.static("carpeta2"));

// app.use("/path1", express.static("carpeta1"));
// app.use("/path2", express.static("carpeta2"));

// app.use("/path1", express.static(__dirname + "/carpeta1"));
// app.use("/path2", express.static(__dirname + "/carpeta2"));
