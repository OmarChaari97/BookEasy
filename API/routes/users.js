import express from "express";
import {updateUser, deleteUser, getUser, getUsers} from "../controllers/userController.js"
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();
router.get("/checkAuthentication",verifyToken, (req,res,next)=>{
    res.send("Heloo user !!!!")
})
router.put("/updateUser/:id",updateUser)
// Delete  user
router.delete("/deleteUser/:id",deleteUser)
// Find user by id
router.get("/:id",getUser)
// Find All users
router.get("/",getUsers)
export default router