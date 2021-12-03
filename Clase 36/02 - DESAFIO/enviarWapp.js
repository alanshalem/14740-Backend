const twilio = require('twilio');

const client = twilio(
  'ACa9a943925449a45b9f8fe7056da155ee',
  '70e18e2124d116a3cebb2f34f9158934',
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
