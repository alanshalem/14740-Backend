import fs from "fs";

fs.promises
  .readFile("./info.txt", "utf-8")
  .then((content) => {
    const info = JSON.parse(content);
    console.log(info);

    info.contenidoObj.author = "Coderhouse";
    fs.promises.writeFile(
      "./package.json.coder",
      JSON.stringify(info.contenidoObj, null, "\t")
    );
  })
  .catch((error) => {
    console.error(error.message);
  });
