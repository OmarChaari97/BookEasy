import hotel from "../models/hotel.js"
export const createHotel = async (req,res, next) => {
    const newhotel = new hotel(req.body)
    try{
        const savedhotel = await newhotel.save()
        res.status(200).json(savedhotel)

    }catch(err){
        next(err)
    }
}
export const updateHotel = async (req,res, next) => {
    try{
        const updatedhotel = await hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedhotel)

    }catch(err){
        next(err)
    }
}
export const deleteHotel = async (req,res, next) => {
    try{
        await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel deleted successfuly")

    }catch(err){
        next(err)
    }
}
export const getHotel = async (req,res, next) => {
    try{
        const onehotel = await hotel.findById(req.params.id)
        res.status(200).json(onehotel)

    }catch(err){
        next(err)
    }
}
export const getHotels = async (req,res, next) => {
    try{
        const allhotels = await hotel.find()
        res.status(200).json(allhotels)

    }catch(err){
        next(err)
    }
}