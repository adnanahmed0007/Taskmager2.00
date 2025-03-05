 
import { Taskmangap } from "../models/TaskModel.js";
 export const Edit =async(req,res)=>
{
    const{newtittle,newdescription}=req.body;
    console.log(req.body)
    const recieverId=req.params;
    const chcek=await Taskmangap.findById(recieverId.id);
     if(chcek)
     {
    const update=await Taskmangap.findByIdAndUpdate(recieverId.id,
        {
            tittle:newtittle,
            description:newdescription


        },
        {
            return:true,
        }
    )
    if(!update)
    {
        return res
        .status(400)
        .json({
            chcek
        })

    }
    return res
    .status(200)
    .json({
        message:"updated syccsuufuly",
        
    })

}



}