const express = require("express");
const handlebars = require("express-handlebars");
const { router } = require("./routes/routes");

const app = express();

// #region [handlebars]

const ENGINE_NAME = "hbs";

app.engine(
  ENGINE_NAME,
  handlebars({
    extname: ".hbs",
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: "index.hbs",
  })
);

app.set("views", "./views");
app.set("view engine", ENGINE_NAME);

// #endregion

// #region [middlewares]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

// #endregion

// #region [server]

const PORT = +process.argv[2] || 8080;

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));

// #endregion
