import jwt from "jsonwebtoken";
const jwtSecret ="mysecretkey@123";
import Usertask from "../models/UserModel.js";
export const ProtectionMiddle=async(req,res,next)=>
{
    const token=req.cookies.jwt;
    if(!token)
    {
        return res
        .status(400)
        .json({
            message:"unautghorized"
        })
    }
    console.log("Cookies received:", req.cookies);
    const verifyToken=jwt.verify(token,jwtSecret);
    if(!verifyToken)    
    {
        return res
        .status(400)
        .json({
            message:"unauthorized"
        })
    }
    const user=await Usertask.findById(verifyToken.Userid);
    if(!user)
    {
        return res
        .status(400)
        .json({
            message:"user not found"
        })
    }
    req.user=user;
    next();



}