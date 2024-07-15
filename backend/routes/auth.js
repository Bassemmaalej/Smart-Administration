const router = require ('express').Router();
const User = require('../model/User');
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/register', async (req, res) => {
    try {
        //checking if the Rfid exist
        const RfidExist = await User.findOne({Rfid:req.body.Rfid});
        if(RfidExist) return res.status(400).send('Rfid already exists');
        //checking if the user is already in the data base
        const emailExist = await User.findOne({email:req.body.email});
        if(emailExist) return res.status(400).send('Email already exists');
        

        const user= new User({
            Rfid: req.body.Rfid,
            name:req.body.Name,
            email:req.body.email,
            identifiant:req.body.identifiant,
            idantity:req.body.idantity,
            Dateidantity:req.body.Dateidantity,
            classe:req.body.classe,
            code:req.body.code,
            payment:req.body.payment
        });
        const saveduser=await user.save();
        res.status(201).json(saveduser);
        

    } catch (err) {
        res.status(500).json({error: err.message});
        console.log(err)
    }

});

//LOGIN
router.post('/login', async(req,res)=>{
    // cheking if RFID correct
    const rfidExist = await User.findOne({Rfid:req.body.Rfid});
    if(!rfidExist) return res.status(400).send('Rfid not found');
    
    try {
        const rfidExist = await User.findOne({Rfid:req.body.Rfid});
        if(!rfidExist) return res.status(400).send('Rfid not found');
    } catch (error) {
        res.send(error)
    }

        const ActivationNumber = Math.floor(100000 + Math.random() * 999999);
        var smtpTransport = nodemailer.createTransport({
          service: "Gmail",
          auth: {
              user: process.env.mailuser,//"*********************",
              pass: process.env.mailpass
          } 
      });

        // setup e-mail data, even with unicode symbols
        var mailOptions = {
          from: '"Administration esprit"' + "**********************", // sender address (who sends)
          to: rfidExist.email,  // list of receivers (who receives)
          subject: 'Verification Number', // Subject line
          text: 'Verify your Account', // plaintext body
          html: "Confirmation Code" + ActivationNumber // html body
        };

        // send mail with defined transport object
        smtpTransport.sendMail(mailOptions, function (error, info) {
          if (error) {
            return console.log(error);
          }
    
          console.log('Message sent: ' + info.response);
        });
      res.send({ActivationNumber,rfidExist}); 
      //return ActivationNumber;



});

router.post('/VerifyAccount/:ActivationNumber/:Email', async(req,res)=>{
    try {
        ActivationNumber = req.params.ActivationNumber;
        ClientEmail = req.params.Email,
        bodyActivationNumber= req.body.bodyActivationNumber;
        if(bodyActivationNumber!=ActivationNumber){res.status(400).json({message : "Verify Confirmation Code"})}
        else if (bodyActivationNumber == ActivationNumber) {
          const loggedinClient = await User.findOne({email:ClientEmail});
          res.json({
            Client: loggedinClient,
            message: "Logged in Successfully"
          });
        }
      } catch (error) {
        res.send(error);
        console.log(error);
      }
      
})


router.get('/extraire', async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users);
    }catch(err){
        res.json({message:err}); 
    }
});

router.get('/:postId',async(req,res)=>{
try{
    const postid=await User.findOne(req.params.Rfid)
    res.json(postid);
}catch(error){
    res.json({message : error});
}
});
router.delete('/:postId',async(req,res)=>{
    try{
        const remouvedpost = await User.remove({_id:req.params.postId});
        res.json(remouvedpost);
    }catch(error){
        res.json({message:error});
    }
})
router.patch('/:postId',async(req,res)=>{
    try{
        const updatedpost = await User.updateOne(
            {_id:req.params.postId},
            {$set:{
            Rfid: req.body.Rfid,
            name:req.body.Name,
            email:req.body.email,
            identifiant:req.body.identifiant,
            idantity:req.body.idantity,
            Dateidantity:req.body.Dateidantity,
            classe:req.body.classe,
            code:req.body.code}}
        );
        res.json(updatedpost);
    }catch(error){
        res.json({message:error});
    }
});


module.exports = router;