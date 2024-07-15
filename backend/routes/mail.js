const nodemailer = require("nodemailer");
require('dotenv').config();


// step1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'process.env.mailuser',
      pass: 'process.env.mailpass',
    }
}); 
//step2
let mailOptions ={
    from: '********',
        to: '******************',
        subject: 'code pin',
        text: 'test'
};

// step3
transporter.sendMail(mailOptions,function(err,data){
    if (err){
        console.log('Error occurs',err);
    }else{
        console.log('email sent')
    }




});



 