const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    login:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})
userSchema.pre("save",async function(next){
    if(this.isModified('password')){
        const temp=await bcrypt.hash(this.password,12);
        this.password=temp;
    }
    next();
})

const User=mongoose.model('User',userSchema)
module.exports=User;