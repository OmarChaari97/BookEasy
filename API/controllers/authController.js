import user from "../models/user.js"
import bcrypt from "bcryptjs"
import {createError} from "../utils/error.js"
import jwt from "jsonwebtoken"

export const register = async(req,res,next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new user({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            email: req.body.email,
            password: hash,
            phone:req.body.phone
        }) 
        await newUser.save();
        res.status(200).send("User has been created.")

    }catch(err){
        next(err)
    }

}

export const login = async(req,res,next) => {
    try{
        const auser =  await user.findOne({email:req.body.email})
        if(!auser) 
            return next(createError(404,"User not found"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password, auser.password)
        if(!isPasswordCorrect) 
            return next(createError(400,"Wrong password or username"))
        const token = jwt.sign({id:auser._id, isAdmin:auser.isAdmin},process.env.JWT);
        const {password, isAdmin, ...otherDetails} = auser._doc;
        res.cookie("access_token", token,{httponly:true}).status(200).json({...otherDetails})

    }catch(err){
        next(err)
    }

}