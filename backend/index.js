const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require("cors")

//import routes 
const authRoute = require('./routes/auth');

//Middlweare
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.options("*", cors());
app.use(cors());



dotenv.config();

// connect to  DB
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log('Connected to database ');
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });




//route middlewares 

app.use ('/api/user',authRoute);

app.listen(3001,() => console.log('server up and running'));
