import express from "express";

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

server.on("error", (error) => {
  console.error(error);
});

////////////////////////

app.set("view engine", "ejs");

////////////////////////

app.get("/", (request, response) => {
  const tagline = "Aca va algo";
  const mascots = [
    {
      name: "Pepe",
      organization: "Digital",
      birthYear: 2012,
    },
    {
      name: "Juan",
      organization: "Google",
      birthYear: 2020,
    },
  ];

  const values = {
    tagline: tagline,
    mascots: mascots,
  };

  response.render("pages/index.ejs", values);
});
