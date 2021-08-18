import express from "express";
import multer from "multer";

const port = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () =>
  console.log(`Server listen on port ${port}`)
);

server.on("error", (error) => console.error(error));

///////////////////

app.use(express.static("public"));

///////////////////

app.get("/", (request, response) => {
  response.send("index.html");
});

///////////////////

const upload = multer({
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, "uploads");
    },
    filename: (request, file, callback) => {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

app.post("/upload", upload.single("archivo"), (request, response, next) => {
  const file = request.file;
  if (!file) {
    const error = new Error("Seleccione un archivo");
    error.httpStatusCode = 400;
    return next(error);
  }

  response.send(file);
});
