import Usertask from "../models/UserModel.js";
import bcrypt from "bcrypt";
import GenerateWebToken from "../util/Generatetoken.js";
export const Signup = async (req, res) => {
    const { username, password, gender, fullName, confirmPassword } = req.body;
    let profilePic1;
    if (username && password && gender && fullName && confirmPassword) {
        if (password !== confirmPassword) {
            return res
                .status(400)
                .json({
                    message: "password is incorrect"
                })
        }
        const check = await Usertask.findOne({
            username
        })
        if (check) {

            return res
                .status(400)
                .json({
                    message: "username is already exit"
                })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const boyprofile = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlprofile = `https://avatar.iran.liara.run/public/girl?username=${username}`
        if (gender === "male") {
            profilePic1 = boyprofile;
        }
        else if (gender === "female") {
            profilePic1 = girlprofile;
        }
        const newUser = new Usertask({
            username,
            password: hashedPassword,
            gender,
            fullName,
            profilePic: profilePic1,

        })
        if (newUser) {
            const token1 =  GenerateWebToken(newUser._id, res);
          
            const check1 = await newUser.save();
            if (check1) {
                return res
                    .status(200)
                    .json({
                        newUser
                    })
            }
        }

        else {
            return res
                .status(200)
                .json({
                    message: "sometryn "
                })
        }



    }



}
