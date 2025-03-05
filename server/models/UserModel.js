import mongoose from "mongoose";
const UserSchematask= new mongoose.Schema({
    username:
    {
        type:String,
        required:true,
        unique:true,
    }
    ,
    fullName:
    {
        type:String,
        required:true,
    },
    gender:
    {
        type:String,
        required:true,
    }
    ,
    password:
    {
        type:String,
        required:true,
    },
    profilePic:
    {
        type:String,
    }


},{timestamps:true})
const Usertask=mongoose.model("usertask",UserSchematask);
export default Usertask;