import mongoose from "mongoose";
export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://pravallika:837423@cluster0.vpo0unq.mongodb.net/food-del').then(()=>console.log("DB connected"));
}