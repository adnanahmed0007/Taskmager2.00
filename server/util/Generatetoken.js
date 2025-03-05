
import jwt from "jsonwebtoken";
const jwtsecret = "mysecretkey@123";
const GenerateWebToken= (Userid,res)=>
{
    const token =  jwt.sign({Userid},jwtsecret,{expiresIn:"6d"});
    res.cookie("jwt",token,
        {
    maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "Strict",
        sameSite: "Lax"
        }
    )
    return token

}
export default GenerateWebToken;