import express from "express";
import mongoose from "mongoose";
const TaskManger=new mongoose.Schema({
    User_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"usertask",
    }
    ,
    tittle:
    {
        type:String,
        required:true,
    }
    ,
    description:
    {
        type:String,
        required:true,
    },
    username:
    {
        type:String,
         

    }
},{timestamps:true})
export const Taskmangap=mongoose.model("taskmanager",TaskManger);