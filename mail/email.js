const nodemailer = require('nodemailer');




const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.GMAIL_ADDRESS,
    port: process.env.GMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized:false,
    },
  });
  try {
    const message = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL,
      subject: options.subject,
      text: options.message,
      html: options.message,
    };

    const m = await transporter.sendMail(message);
    console.log(m);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = sendEmail;