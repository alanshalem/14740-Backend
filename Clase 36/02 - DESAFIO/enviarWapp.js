const twilio = require('twilio');

const client = twilio(
  '...',
  '...',
);

client.messages.create(
  {
    body: process.argv[3],
    from: 'whatsapp:+14155238886',
    to: `whatsapp:+54911${process.argv[2]}`,
  },
)
  .then((message) => console.log(message.sid))
  .catch((error) => console.log(error));
