const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: '...@ethereal.email',
      pass: '...',
    },
  },
);

const mailOptions = {
  from: 'Servidor Node.js',
  to: '...@gmail.com',
  subject: 'Prueba Clase 35',
  html: '<h1>Hola</h1>',
};

transporter.sendMail(
  mailOptions,
  (error, info) => {
    if (error) {
      console.log(error);

      return error;
    }

    return console.log(info);
  },
);
