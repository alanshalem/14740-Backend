const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    service: 'gmail',
    auth: {
      user: '...@gmail.com',
      pass: '...', // ! Contraseña de aplicación
    },
  },
);

const mailOptions = {
  to: process.argv[4],
  subject: process.argv[2],
  html: process.argv[3],
};

const attachmentPath = process.argv[5];
if (attachmentPath) {
  mailOptions.attachments = [
    {
      path: attachmentPath,
    },
  ];
}

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
