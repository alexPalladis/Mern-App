const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (id) => {
    return jwt.sign({id},process.env.SECRET,{expiresIn:'3d'})
}

//login user
const loginUser = async (req,res) => {

    const {email,password} = req.body;

    try{
        const user = await User.login(email,password);

        //create a token
        const token  = createToken(user.id)

        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//signup user
const signupUser = async (req,res) => {
    const {email,password} = req.body

    try{
        const user = await User.signup(email,password);

        //create a token
        const token  = createToken(user.id)

        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


module.exports = {signupUser,loginUser}

