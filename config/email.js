const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SUPORTE_CLINICA,
    pass: process.env.ADMIN123,
  },
});

module.exports = transporter;