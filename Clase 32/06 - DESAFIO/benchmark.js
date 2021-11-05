const autocannon = require('autocannon');
const stream = require('stream');

const run = (url) => {
  const buffer = [];
  const outputStream = new stream.PassThrough();

  const instance = autocannon(
    {
      url,
      connections: 500,
      duration: 20,
    },
  );

  autocannon.track(
    instance,
    {
      outputStream,
    },
  );

  outputStream.on(
    'data',
    (data) => buffer.push(data),
  );

  instance.on(
    'done',
    () => process.stdout.write(Buffer.concat(buffer)),
  );
};

console.log('Running all benchmarks in parallel...');

// run('http://localhost:8080/randoms-debug');
run('http://localhost:8080/randoms-nodebug');
