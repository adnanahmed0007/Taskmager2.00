import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const TaksGet = () => {
    const [tittle, Settittle] = useState("");
    const [description, Setdescription] = useState("");
    const navi = useNavigate();

const Handlesubmit= async(e)=>
{
    e.preventDefault();
    try 
    {
        
        if(tittle&&description)
        {
        const sendtask=await axios.post("http://localhost:8765/task",
            {
                tittle,
                description,
            },
            { withCredentials: true } 
        )
        if(sendtask)
        {
            navi("/datashow");
            console.log(sendtask.data)
        }
        else{
            console.log("error")
        }
    }
    else{
        alert("all field are required")
    }
    }
    catch(e)
    {
        console.log(e)
    }
     
}
    return (
        <div>
            <form onSubmit={Handlesubmit}>
                <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4 text-center">Add a Task</h2>

                        {/* Title Input */}
                        <div className="mb-4">
                            <label className="block mb-1 font-semibold">Title</label>
                            <input
                                placeholder="Enter the title"
                                onChange={(e) => Settittle(e.target.value)}
                                type="text"
                                name="title"
                                className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Description Input */}
                        <div className="mb-4">
                            <label className="block mb-1 font-semibold">Description</label>
                            <textarea
                                placeholder="Enter the description"
                                onChange={(e) => Setdescription(e.target.value)}
                                name="description"
                                className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                                required
                            />
                        </div>
                        <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                    </div>


                </div>
                
            </form>
        </div>
    );
};

export default TaksGet;
