const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');

router.use(express.json());
require("./app");
const User=require("./userSchema");

router.get('/',(req,res)=>{
    res.send("hello Moto..")
})

router.post('/signin',async(req,res)=>{
try{
    const{login,password}=req.body;
    if(!login||!password)
    {
    return res.status(400).json({error:"Plz fill Data Properly."});
    }
    const userLogin=await User.findOne({login:login});
    const isMatch=await bcrypt.compare(password,userLogin.password);
    if(!userLogin||!isMatch)
    {
    return res.status(400).json({error:"Wrong Credentials"});
    }
    else{
       return res.json({message:`User ${userLogin.name} Sign in successfull`});
    }
}
catch(err){console.log(err);}
});

router.post('/register',(req,res)=>{
    const{name,login,password}=req.body;
    if(!name||!login||!password)
    {
    console.log(name);
    return res.status(422).json({error:"Plz fill Data Properly"});
    }
    if(User.findOne({login:login}).then((userExist)=>{
        if(userExist){
            return res.status(421).json({error:"User Already Exist"});
        }
    else{
    const user=new User(req.body)
    user.save().then(()=>{
    return res.status(201).json({message:"User Registered Successfully"});
    }).catch((err)=>res.status(500).json({error:"failed to register"}));
    }}));
})

module.exports=router