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
         subject:`
          Hello EagleHouse, I am ${contactInfo.name},
          Subject:${contactInfo.subject},
          Email: ${contactInfo.email},
          Message: ${contactInfo.message}`
        });
    
    res.send("Message Successfully Sent!");
  } catch (error) {
    res.send("Message Could not be Sent");
  }
};


