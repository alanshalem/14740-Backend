const twilio = require('twilio');

const client = twilio(
  '...',
  '...',
);

client.messages.create(
  {
    body: 'Hola soy un SMS desde Node.js!',
    from: '+15...',
    to: '+54011...',
  },
)
  .then((message) => console.log(message.sid))
  .catch((error) => console.log(error));
