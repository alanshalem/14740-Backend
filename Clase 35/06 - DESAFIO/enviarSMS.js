const twilio = require('twilio');

const client = twilio(
  '...',
  '...',
);

client.messages.create({
  body: process.argv[3],
  from: '+15...',
  to: `+54011${process.argv[2]}`,
})
  .then((message) => console.log(message.sid))
  .catch((error) => console.log(error));
