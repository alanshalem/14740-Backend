const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Server iniciado OK en puerto ${PORT}`);
});

server.on("error", (error) => {
  console.error(error);
});

///////////////////

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});

///////////////////

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "uploads");
  },
  filename: (request, file, callback) => {
    callback(null, `${file.fieldname}-${Date.now()}`);
  },
});

const upload = multer({ storage: storage });

app.post("/uploadfile", upload.single("Single"), (request, response, next) => {
  const file = request.file;
  if (!file) {
    const error = new Error("Seleccione un archivo");
    error.httpStatusCode = 400;
    return next(error);
  }

  response.send(file);
});

app.post(
  "/uploadmultiple",
  upload.array("Multi", 12),
  (request, response, next) => {
    const files = request.files;
    if (!files) {
      const error = new Error("Seleccione un archivo");
      error.httpStatusCode = 400;
      return next(error);
    }

    response.send(files);
  }
);
