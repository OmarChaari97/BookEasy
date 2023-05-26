import express from "express";
import hotel from "../models/hotel.js"
const router = express.Router();
//Create hotel
router.post("/createHotel",async (req,res) => {
    const newhotel = new hotel(req.body)
    try{
        const savedhotel = await newhotel.save()
        res.status(200).json(savedhotel)

    }catch(err){
        res.status(500).json(err)
    }
})
//Update hotel
router.put("/updateHotel/:id",async (req,res) => {
    try{
        const updatedhotel = await hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedhotel)

    }catch(err){
        res.status(500).json(err)
    }
})
// Delete  hotele
router.delete("/deleteHotel/:id",async (req,res) => {
    try{
        await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel deleted successfuly")

    }catch(err){
        res.status(500).json(err)
    }
})
// Find hotel by id
router.get("/:id",async (req,res) => {
    try{
        const onehotel = await hotel.findById(req.params.id)
        res.status(200).json(onehotel)

    }catch(err){
        res.status(500).json(err)
    }
})
// Find All hotel
router.get("/",async (req,res) => {
    try{
        const allhotels = await hotel.find()
        res.status(200).json(allhotels)

    }catch(err){
        res.status(500).json(err)
    }
})
export default router