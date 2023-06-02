import mongoose from "mongoose";
import { Schema } from "mongoose";


const User = new Schema({
    name: String,
    email: String,
    password: String,
    // otp: String,
    number: Number,
    isNumberVerified : { type: Boolean, default: false },
    isEmailVerified : { type: Boolean, default: false },
    otpForNumber : String, 
    otpForEmail : String 
    
});

export default mongoose.model("Users", User)