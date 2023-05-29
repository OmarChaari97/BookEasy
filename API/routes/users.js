import express from "express";
import {updateUser, deleteUser, getUser, getUsers} from "../controllers/userController.js"
import { verifyToken, verifyUser,verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
router.get("/checkAuthentication",verifyToken, (req,res,next)=>{
    res.send("Heloo user !!!!")
})
router.get("/checkUser/:id",verifyUser, (req,res,next)=>{
    res.send("Heloo user, you are logged and u can delete your account !!!!")
})
router.get("/checkAdmin/:id",verifyAdmin, (req,res,next)=>{
    res.send("Heloo admin, you are logged and u can delete all accounts !!!!")
})

router.put("/updateUser/:id",verifyUser,updateUser)
// Delete  user
router.delete("/deleteUser/:id",verifyUser,deleteUser)
// Find user by id
router.get("/:id",verifyUser,getUser)
// Find All users
router.get("/",verifyAdmin,getUsers)
export default router