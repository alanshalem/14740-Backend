const express = require('express');
const twilio = require('twilio');

const app = express();

// #region Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

// #endregion

// #region Listen

const PORT = +process.argv[2] || 8080;

app.listen(
  PORT,
  () => console.log(`Server listen on port ${PORT}`),
);

// #endregion

// #region Routes

const client = twilio(
  '...',
  '...',
);

app.post(
  '/send',
  (request, response) => {
    const opts = {
      from: 'whatsapp:+14155238886',
      to: `whatsapp:+54911${request.body.numero}`,
      body: request.body.mensaje,
    };

    if (request.body.adjunto) {
      opts.mediaUrl = request.body.adjunto;
    }

    client.messages
      .create(opts)
      .then((message) => response.status(200).json(message))
      .catch((error) => response.status(500).json(error));
  },
);

// #endregion
