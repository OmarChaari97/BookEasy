import user from "../models/user.js"
export const updateUser = async (req,res, next) => {
    try{
        const updateduser = await user.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updateduser)

    }catch(err){
        next(err)
    }
}
export const deleteUser = async (req,res, next) => {
    try{
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted successfuly")

    }catch(err){
        next(err)
    }
}
export const getUser = async (req,res, next) => {
    try{
        const oneuser = await user.findById(req.params.id)
        res.status(200).json(oneuser)

    }catch(err){
        next(err)
    }
}
export const getUsers = async (req,res, next) => {
    try{
        const allusers = await user.find()
        res.status(200).json(allusers)

    }catch(err){
        next(err)
    }
}