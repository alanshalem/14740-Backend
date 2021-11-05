const express = require('express');
const crypto = require('crypto');

const app = express();
const PORT = +process.argv[2] || 8080;

app.listen(
  PORT,
  () => console.log(`Server listen on port ${PORT}`),
);

app.use(express.static('public'));

const users = {};

app.get(
  '/getUsers',
  (_request, response) => response.json({ users }),
);

app.get(
  '/newUser',
  (request, response) => {
    let username = request.query.username || '';
    const password = request.query.password || '';

    username = username.replace(/[!@#$%^&*]/g, '');

    if (!username || !password || users[username]) {
      return response.status(400);
    }

    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(
      password,
      salt,
      10000,
      512,
      'sha512',
    );

    users[username] = {
      salt,
      hash,
    };

    return response.sendStatus(200);
  },
);

app.get(
  '/auth-bloq',
  (request, response) => {
    let username = request.query.username || '';
    const password = request.query.password || '';

    username = username.replace(/[!@#$%^&*]/g, '');

    if (!username || !password || !users[username]) {
      process.exit(1);
    }

    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(
      password,
      salt,
      10000,
      512,
      'sha512',
    );

    if (crypto.timingSafeEqual(hash, hash)) {
      return response.sendStatus(200);
    }

    return process.exit(2);
  },
);

app.get(
  '/auth-nobloq',
  (request, response) => {
    let username = request.query.username || '';
    const password = request.query.password || '';

    username = username.replace(/[!@#$%^&*]/g, '');

    if (!username || !password || !users[username]) {
      process.exit(3);
    }

    crypto.pbkdf2(
      password,
      users[username].salt,
      10000,
      512,
      'sha512',
      (_error, hash) => {
        if (users[username].hash.toString() === hash.toString()) {
          return response.sendStatus(200);
        }

        return process.exit(4);
      },
    );
  },
);
