import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt, { genSalt } from "bcrypt"         //hashing password
import validator from "validator"   //validating email

//login user
const loginUser=async (req,res)=>{
 const {email,password}=req.body;
 try {
    const user=await userModel.findOne({email});
    if(!user){
        return res.json({success:false,message:"user not exist"})
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
     return res.json({success:false,message:"Invalid credentials!"})
    }
    const token=createToken(user._id);
    res.json({success:true,token})
 } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
 }
}

//createToken 
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register user
const registerUser=async (req,res)=>{
   const {name,email,password}=req.body;
   try{
        //checking user already exists
        const exists=await userModel.findOne({email})
        if(exists){
        return res.json({success:false,message:"user already exists"})
        }

        //validating email password
        if(!validator.isEmail(email)){
        return res.json({success:false,message:"enter valid email"})
        }
        if(password.length<8){
        return res.json({success:false,message:"enter strong password"})
        }

        //hashing user password
        const salt=await bcrypt.genSalt(10); //10 to proccess password
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user=await newUser.save();
        const token=createToken(user._id)
        res.json({success:true,token})
   }
   catch(error){
     console.log(error)
     res.json({success:false,message:"error"})
   }
}

export {loginUser,registerUser};