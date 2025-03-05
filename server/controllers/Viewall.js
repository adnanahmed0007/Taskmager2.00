import { Taskmangap } from "../models/TaskModel.js"
export const ViewLL=async(req,res)=>
{

 const datashjow1=await Taskmangap.find({});
 return res
 .status(200)
 .json({
    datashjow1,
    message:"message sent succefully",
 })

}