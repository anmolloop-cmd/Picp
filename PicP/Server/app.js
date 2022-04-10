    const express=require('express');
    const mongoose=require('mongoose');
    const router = require('./auth');
    const app=express();
    const port=3000;
    const DB="mongodb+srv://admin:feO0J6tNYKgplSQr@cluster0.raqty.mongodb.net/PicP?retryWrites=true&w=majority"
    mongoose.connect(DB).then(()=>{console.log("connected")}).catch((err)=>console.log(err));
    app.use(require('./auth'));
    app.use(express.json());

 

    app.listen(port,()=>{console.log('Listening')});