const { exec } = require('child_process');

exec(
  'ls -lh',
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
    }

    console.log(`exec stdout:\n${stdout}`);
  },
);
