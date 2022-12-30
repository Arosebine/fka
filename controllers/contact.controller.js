const express = require('express');
const Contact = require('../models/email-sender');
const sendEmail = require('../mail/email');




exports.contactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contactInfo = await Contact.create({ 
        email, 
        name, 
        subject, 
        message,
    });
    await sendEmail({ 
        subject: contactInfo.subject, 
        message: `I am, ${contactInfo.name}, ${contactInfo.email},<br><br> ${contactInfo.message}` ,
        });
    
    res.send("Message Successfully Sent!");
  } catch (error) {
    res.send("Message Could not be Sent");
  }
};


