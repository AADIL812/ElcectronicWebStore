const {sendEmail}=require('../models/email.model');

async function httpSendEmail(req,res){
    const { to, subject, text } = req.body;
    try {
    await sendEmail(to, subject, text);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Failed to send email');
  }
}

module.exports={httpSendEmail};