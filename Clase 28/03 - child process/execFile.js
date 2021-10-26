const { execFile } = require('child_process');

execFile(
  `${__dirname}/prueba.sh`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
    }

    console.log(`execFile stdout:\n${stdout}`);
  },
);
