
import { v4 as uuidv4} from 'uuid';
import Users from '../modals/Users.js';

// export const otpRegistration = async (req, res) =>{
//     try{
//         const {number, email} = req.body;
//         if(!number) return res.send("number not found.")
//         if(!email) return res.send("email not found.")
//         // var code = uuidv4();
//         var forNumber = uuidv4();
//         var forEmail = uuidv4();
//         // res.send(code);

//         const isNummberPresent = await Users.find({number}).exec();
//         if(isNummberPresent.length) return res.send("Number already used")
        
//         const isEmailPresent = await Users.find({email}).exec();
//         if(isEmailPresent.length) return res.send("Email already used")

//         const user = new Users({
//             email : email,
//             number : number,
//             // otp : code
//             otpForNumber : forNumber,
//             otpForEmail : forEmail
            
//         })
//         await user.save();
//         res.send("Check your mobile number or email for otp.")

//     }catch(error){
//         return res.send(error);
//     }
// }

export const otpRegistration = async (req, res) =>{
    try{
        const {number, email} = req.body;
        if(!number) return res.send("number not found.")
        if(!email) return res.send("email not found.")
        // var code = uuidv4();
        var codeforNumber = uuidv4();
        var codeforEmail = uuidv4();
        // res.send(code);

        const isNummberPresent = await Users.find({number}).exec();
        if(isNummberPresent.length) return res.send("Number already used")
        
        const isEmailPresent = await Users.find({email}).exec();
        if(isEmailPresent.length) return res.send("Email already used")

        const user = new Users({
            email : email,
            number : number,
            // otp : code
            otpForNumber : codeforNumber,
            otpForEmail : codeforEmail,
            isNumberVerified : false,
            isEmailVerified : false

            
        })
        await user.save();
        res.send("Check your mobile number  for otp.")

    }catch(error){
        return res.send(error);
    }
}


export const otpCkeckForNumber = async (req, res) => {
    try{
        const {number,otp} = req.body;
        if(!number) return res.send("number is required");
        // if(!email) return res.send("email is required");
        if(!otp) return res.send("otp is required");

        const user = await Users.find({number}).exec();
        if(!user.length) return res.send("user not found");

        if(user[0].otpForNumber== otp){

            // const user = await Users.updateOne({ number }, { $set: { isNumberVerified: true } });
            const user = await Users.findOneAndUpdate({ number }, { isNumberVerified: true }).exec();
            await user.save();
            // res.send("Check your mobile number  for otp.")
         return res.send("Nummber is verified");

        }
        return res.send("otp wrong!");

        // return res.send(user[0]);


    }catch(error){
        return res.send(error);
    }
}

export const otpCkeckForEmail = async (req, res) => {
    try{
        const {email,otp} = req.body;
        // if(!number) return res.send("number is required");
        if(!email) return res.send("email is required");
        if(!otp) return res.send("otp is required");

        const user = await Users.find({email}).exec();
        if(!user.length) return res.send("user not found");

        if(user[0].otpForEmail== otp){
            // const user = await Users.updateOne({ number }, { $set: { isNumberVerified: true } });
            const user = await Users.findOneAndUpdate({ email }, { isEmailVerified: true }).exec();
            await user.save();
            // res.send("Check your mobile number  for otp.")
         return res.send("Emaail is verified");

        }
        return res.send("otp wrong!");

        // return res.send(user[0]);


    }catch(error){
        return res.send(error);
    }
}
