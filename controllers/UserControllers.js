import Users from "../modals/Users.js";



export const login =  async(req, res) => {
    try{
        const{userEmail,userPassword} = req.body;
        if(!userEmail) return res.send("User Email is required");
        if(!userPassword) return res.send("User Password is required");
        const response = await Users.find({email : userEmail}).exec();
        if(response.length){
            if(userPassword === response[0].password){
                return res.send("you are logged in");
            }else{
                return res.send("Wrong password");
            }
        }else{
            return res.send("User not found check your email..")
        }
    }catch(error){
        return res.send(error)
    }
}

export const updateUserName = async (req, res) => {
    try {
        const {email,name } = req.body;
        if (!email) return res.send("Email not found!")
        const response = await Users.find({email}).exec();
        console.log(response);
        if (response) {
            const res = await Users.updateOne({email},{$set: {name : name }});
            await res.save();
            return res.send("record updated")
            // return res.send(response[0])
        } else {
            return res.send("User not found!")
        }
    } catch (error) {
        return res.send(error)
    }
}




export const register = async (req, res) => {
    try {
        const { userName, userEmail, userPassword, userConfirmPassword } = req.body;
        if (!userName) return res.send("User name is requierd!");
        if (!userEmail) return res.send("User email is required!")
        if (!userPassword) return res.send("User Password is required!")
        if (!userConfirmPassword) return res.send("User Confirm Password is required!")
        if (userPassword.length <= 8) {
            return res.send("User Password length is less than 8 !")
        }
        if (userConfirmPassword.length <= 8) {
            return res.send("User Confirm Password length is less than 8 !")
        }
        if (userPassword != userConfirmPassword) {
            return res.send("Password and Confirm Password Not matched!!")
        }
        const response = await Users.find({ email: userEmail }).exec();
        // console.log(response,"response")
        if (response.length ) {
            return res.send("Email is already Taken or You are already resgistered!!");
        }
        const user = new Users({
            name: userName,
            email: userEmail,
            password: userConfirmPassword
        });
        await user.save();
        return res.send("Resgistration Succesfull!")
    } catch (error) {
        return res.send(error)
    }
}

export const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.send("Email not found!")
        const response = await Users.find({ email }).exec();
        if (response) {
            return res.send(response[0])
        } else {
            return res.send("User not found!")
        }
    } catch (error) {
        return res.send(error)
    }
}