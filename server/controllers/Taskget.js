import { Taskmangap } from "../models/TaskModel.js"

export const Taskget=async(req,res)=>
{
const {tittle,description}=req.body;
console.log(req.body)
  const userLOgged=req.user._id;
  const username=req.user.username;
  console.log(username)
   
  if(tittle&&description)
  {
     const newTask=new Taskmangap({
        tittle,
        description,
        User_id:userLOgged,
        username:username,

     })
     if(newTask)
     {
        const chcek=await newTask.save();
        if(chcek)
        {
            return res
            .status(200)
            .json({newTask})
        }
        else{
            return res
            .status(400)
            .json({message:"we can not save thye data to the databse"})
        }
         
     }
     
  }
  return res
  .status(400)
  .json({
    message:"all field are required"
  })

   

}