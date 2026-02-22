import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    avatar:{
        type:String
    },
    credits:{
        type:number,
        default:100,
        min:0
    },
    plan:{
        type:String,
        enum:["free", "pro", "enterprise"],
        default: "free"
    }
},{timestramp:true})

const User = mongoose.model("USer",userSchema)
export default User 