import express from "express";
import hotel from "../models/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";
import {createHotel, updateHotel,deleteHotel,getHotel,getHotels} from "../controllers/hotelController.js"
const router = express.Router();
//Create hotel
router.post("/createHotel",verifyAdmin, createHotel)
//Update hotel
router.put("/updateHotel/:id",verifyAdmin,updateHotel)
// Delete  hotele
router.delete("/deleteHotel/:id",verifyAdmin,deleteHotel)
// Find hotel by id
router.get("/:id",getHotel)
// Find All hotel
router.get("/",getHotels)
export default router