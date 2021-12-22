const yargs = require("yargs");

let { argv } = yargs;

console.log(`Name: ${argv.name}`);
console.log(`Age: ${argv.age}`);

argv = yargs
  .command(
    "*",
    "the default command handler",
    () => {},
    () => {
      console.log("Funcion default");
    }
  )
  .command(
    "upload",
    "upload a file",
    () => {},
    () => {
      console.log("Uploading a file");
    }
  )
  .command(
    "login <username> [password]",
    "authenticate with the server",
    () => {},
    (args) => {
      console.log(`${args.username}: ${args.password}`);
    }
  ).argv;
