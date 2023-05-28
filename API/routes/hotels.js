import express from "express";
import hotel from "../models/hotel.js"
import {createHotel, updateHotel,deleteHotel,getHotel,getHotels} from "../controllers/hotelController.js"
const router = express.Router();
//Create hotel
router.post("/createHotel", createHotel)
//Update hotel
router.put("/updateHotel/:id",updateHotel)
// Delete  hotele
router.delete("/deleteHotel/:id",deleteHotel)
// Find hotel by id
router.get("/:id",getHotel)
// Find All hotel
router.get("/",getHotels)
export default router