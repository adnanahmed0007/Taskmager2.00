
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const [username, Setusername] = useState("");
    const [password, SetPassword] = useState("");
    const navi = useNavigate();
    const Handlesubmit = async (e) => {
        e.preventDefault();
        try {
            if (password && username) {
                const response = await axios.post(
                    "http://localhost:8765/api/auth/login",
                    { username, password },
                    { withCredentials: true }   
                );
                if (response.status === 200) {
                    console.log(response);
                    console.log(response.data);
                    alert("logged in");
                } else {
                    alert("Please use correct details");
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
            <div className="max-w-md mx-auto p-6 bg-gray-1300 text-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">User Login</h2>
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
                        <label className="block text-gray-300">Password</label>
                        <input
                            placeholder="Enter the password"
                            onChange={(e) => SetPassword(e.target.value)}
                            type="password"
                            name="password"
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

export default Login;
