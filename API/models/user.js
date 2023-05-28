import mongoose from "mongoose"
const {Schema} = mongoose
const UserSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    phone:{
        type:String,
        required:true
    }
});
export default mongoose.model("user",UserSchema)