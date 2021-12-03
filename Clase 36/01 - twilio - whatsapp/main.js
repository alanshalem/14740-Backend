const twilio = require('twilio');

// ! Sandbox https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox?frameUrl=%2Fconsole%2Fsms%2Fwhatsapp%2Fsandbox%3Fx-target-region%3Dus1

const client = twilio(
  '...',
  '...',
);

client.messages.create(
  {
    body: 'Hola mundo!',
    mediaUrl: [
      'https://i0.wp.com/lanoticia.com/wp-content/uploads/2020/08/cuantos-de-estos-mitos-del-chocolate-te-alejan-de-una-barra.jpg?fit=800%2C600&ssl=1',
    ],
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5491133054604',
  },
)
  .then((message) => console.log(message.sid))
  .catch((error) => console.log(error));
