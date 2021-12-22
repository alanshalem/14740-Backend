const minimist = require("minimist");

const args = minimist(process.argv.slice(2), {
  alias: {
    h: "help",
    v: "version",
  },
  default: {
    port: 8080,
  },
});

console.log(args);
console.log(args.i);
