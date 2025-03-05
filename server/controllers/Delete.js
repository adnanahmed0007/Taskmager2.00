
import { Taskmangap } from "../models/TaskModel.js";
export const Delete=async(req,res)=>
{
    const recieverId=req.params;
    if(recieverId.id)
    {
     
    const findDelte=await Taskmangap.findByIdAndDelete(recieverId.id);
    if(findDelte)
    {
        return res
        .status(200)
        .json({
          message:"deleted successfully"
        })
    }
}
      return res
      .status(400)
      .json({
        message:"can not delte not found the mesage"
      })
      
    
}