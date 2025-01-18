const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like 'hotmail', 'yahoo', etc.
    auth: {
      user: 'aadilharis812@gmail.com', // Your email address
      pass: 'bpam lulp vhit pwna',  // Your email password or app-specific password
    },
  });

  // Set up email data
  let mailOptions = {
    from: 'aadilharis812@gmail.com',
    to: to, // Recipient's email
    subject: subject, // Email subject
    text: text, // Email body
  };

  // Send email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports={sendEmail};