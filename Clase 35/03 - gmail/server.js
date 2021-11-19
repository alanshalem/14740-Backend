const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    service: 'gmail',
    auth: {
      user: '...@gmail.com',
      // ! Con 2FA, necesario Contraseña de Aplicación
      // ! Sin 2FA Aplicacion Poco Segura https://www.google.com/settings/security/lesssecureapps
      pass: '...',
    },
  },
);

const mailOptions = {
  from: 'Servidor Node.js',
  to: '...@gmail.com',
  subject: 'Prueba Clase 35',
  html: '<h1>Hola</h1>',
  attachments: [
    {
      path: 'prueba.txt',
    },
  ],
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
