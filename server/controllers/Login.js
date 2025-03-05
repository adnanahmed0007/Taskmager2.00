import Usertask from "../models/UserModel.js";
import GenerateWebToken from "../util/Generatetoken.js";
import bcrypt from "bcrypt";

export const Login = async (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
        const userFind1 = await Usertask.findOne({ username });
        if (userFind1) {
            const comparePassword = await bcrypt.compare(password, userFind1.password);
            if (!comparePassword) {
                return res.status(400).json({ message: "please sign up" });
            }
            const generateToken1 = GenerateWebToken(userFind1._id, res);
            if (comparePassword && generateToken1) {
                return res.status(200).json({
                    userFind1,
                    message: "user is logged in successfully"
                });
            }
        } else {
            return res.status(400).json({ message: "user is not registered" });
        }
    } else {
        return res.status(400).json({ message: "all fields are required" });
    }
};