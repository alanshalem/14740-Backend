import faker from "faker";
import fs from "fs";

let text = "NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\r\n";

let randomFirstName;
let randomLastName;
let randomEmail;
let randomJobTitle;
let randomLocale;

for (let index = 0; index < 100; index++) {
  randomFirstName = faker.name.firstName();
  randomLastName = faker.name.lastName();
  randomEmail = faker.internet.email();
  randomJobTitle = faker.name.jobTitle();
  randomLocale = faker.random.locale();

  text += `${randomFirstName};${randomLastName};${randomEmail};${randomJobTitle};${randomLocale}\r\n`;
}

fs.writeFile("./test.csv", text, (error) => {
  if (error) {
    console.error(error);

    return;
  }

  console.log("Archivo guardado");
});
