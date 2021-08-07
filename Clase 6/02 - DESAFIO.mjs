import fs from "fs";

try {
  fs.writeFileSync(
    "./fyh.txt",
    new Date().toLocaleString("es-AR", {
      dateStyle: "short",
      timeStyle: "short",
    })
  );

  console.log(fs.readFileSync("./fyh.txt", "UTF-8"));
} catch (error) {
  console.log("Hubo un error");
}
