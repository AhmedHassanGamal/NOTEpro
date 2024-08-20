const nodemailer = require('nodemailer');
const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASS } = require('../config/config');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'paxton.mcglynn@ethereal.email',
      pass: '396E8z9X5TXndsmfcg'
  }
});

const sendRegistrationEmail = (user) => {
  const mailOptions = {
    from: EMAIL_USER,
    to: user.email,
    subject: 'Welcome to ahmed todo list !',
    text: `Dear ${user.name},\n\nThank you for registering with ahmed note list! We are excited to have you join our community.\n\nBest regards,\nThe [YourAppName] Team,
  `};

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.error(err);
    else console.log('Email sent: ' + info.response);
  });
};

module.exports = { sendRegistrationEmail };