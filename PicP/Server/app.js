    const express=require('express');
    const mongoose=require('mongoose');
    const router = require('./auth');
    const app=express();
    const port=3000;
    mongoose.connect(DB).then(()=>{console.log("connected")}).catch((err)=>console.log(err));
    app.use(require('./auth'));
    app.use(express.json());

 

    app.listen(port,()=>{console.log('Listening')});
