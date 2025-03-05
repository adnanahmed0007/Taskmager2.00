import React, { useState } from 'react'
import axios from "axios"
import { useNavigate} from "react-router-dom";

const Signup = () => {
    const [username, Setusername] = useState("");
    const [fullName, Setfullname] = useState("");
    const [gender, Setgender] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPassword, Setconfirmpassword] = useState("");
    const navi=useNavigate();

    const Handlesubmit = async (e) => {
        e.preventDefault();
        try {
            if (password && fullName && username && gender && confirmPassword) {
                if (password === confirmPassword) {
                    const checkSignup = await axios.post("http://localhost:8765/api/auth/signup", {
                        username,
                        fullName,
                        gender,
                        password,
                        confirmPassword,
                    },{ withCredentials: true } );

                    if (checkSignup) {
                        console.log(checkSignup.data);
                        navi("/taskget")

                    }
                } else {
                    alert("Password is incorrect");
                }
            } else {
                alert("All fields are required");
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">User Registration</h2>
                <form onSubmit={Handlesubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-300">Username</label>
                        <input
                            placeholder="Enter the username"
                            onChange={(e) => Setusername(e.target.value)}
                            type="text"
                            name="username"
                            className="w-full p-2 border rounded bg-gray-800 text-white border-gray-600"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300">Full Name</label>
                        <input
                            placeholder="Enter your full name"
                            onChange={(e) => Setfullname(e.target.value)}
                            type="text"
                            name="fullName"
                            className="w-full p-2 border rounded bg-gray-800 text-white border-gray-600"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300">Gender</label>
                        <input
                            placeholder="Enter your gender"
                            onChange={(e) => Setgender(e.target.value)}
                            type="text"
                            name="gender"
                            className="w-full p-2 border rounded bg-gray-800 text-white border-gray-600"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300">Password</label>
                        <input
                            placeholder="Enter your password"
                            onChange={(e) => SetPassword(e.target.value)}
                            type="password"
                            name="password"
                            className="w-full p-2 border rounded bg-gray-800 text-white border-gray-600"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300">Confirm Password</label>
                        <input
                            placeholder="Confirm your password"
                            onChange={(e) => Setconfirmpassword(e.target.value)}
                            type="password"
                            name="confirmPassword"
                            className="w-full p-2 border rounded bg-gray-800 text-white border-gray-600"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
