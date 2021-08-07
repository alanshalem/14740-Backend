import fs from "fs";

const fileName = "./package.json";
let size;
fs.stat(fileName, (error, stats) => {
  if (error) {
    console.error("Hubo un error con fs.stat!");
    return;
  }

  size = stats.size;
});

const info = {};
fs.readFile(fileName, "UTF-8", (error, content) => {
  if (error) {
    console.error("Hubo un error con fs.readFile!");
    return;
  }

  info.contenidoStr = content;
  info.contenidoObj = JSON.parse(content);
  info.size = size;
  console.log(info);

  fs.writeFile(
    "./info.txt",
    JSON.stringify(info, null, "\t"),
    "UTF-8",
    (error) => {
      if (error) {
        console.error("Hubo un error con fs.writeFile!");
        return;
      }
    }
  );
});
