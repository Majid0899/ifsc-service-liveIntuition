import { generateToken } from "../middleware/authMiddleware.js";
import User from "../model/User.js";


const handleRegisterUser=async (req,res)=>{
    try {
        const {username,email,password}=req.body

        // Check for empty
        if(!username || !email || !password){
            return res.status(400).json({error:"Please fill all the feilds!!!"})
        }

        // check if user already exist
        const existingUser=await User.findOne({email:email})
        if(existingUser){
            return res.status(400).json({error:"User already exist "})
        }

        // create a user
        const user=new User({username,email,password})

        await user.save()

        const payload={
            id:user._id,
            username:user.username
        }

        const token=generateToken(payload)

        res.status(200).json({user,token,message:"Registration Successfull"})


        

    } catch (error) {

        console.log(error)
        res.status(500).json({error:`Internal Server Error ${error.message}`})
        
    }
}

export {handleRegisterUser}