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
  from: 'Clase 35',
  to: '...@gmail.com',
  subject: process.argv[2],
  html: process.argv[3],
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
