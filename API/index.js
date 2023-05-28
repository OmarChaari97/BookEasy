import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRouter from "./routes/auth.js"
import usersRouter from "./routes/users.js"
import hotelsRouter from "./routes/hotels.js"
import roomsRouter from "./routes/rooms.js"
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongo ")
    }catch (error) {
        handleError(error);
    }
}
app.use(cookieParser())
app.use(express.json())
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", usersRouter)
app.use("/api/v1/hotels", hotelsRouter)
app.use("/api/v1/rooms", roomsRouter)

app.listen(8560,()=>{
    connect()
    console.log("Connected heloo")
})