import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Datashow = () => {
    const [array, setArray] = useState([]);

    const Delteit = async (id) => {
        console.log("deleting... id: ", id);
        const datadelete1 = await axios.post(`http://localhost:8765/task/delete${id}`, {}, {
            withCredentials: true,
        });
        if (datadelete1.data.message) {
            await datall();
        }
    };

    const datall = async () => {
        try {
            const viewdata = await axios.get("http://localhost:8765/views", {
                withCredentials: true,
            });

            console.log(viewdata.data.datashjow1);
            setArray(viewdata.data.datashjow1);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        datall();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-center">Task List</h1>

            {array.length > 0 ? 
                <div className="w-full max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {array.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-800 p-4 rounded-lg shadow-md transition transform hover:scale-105 flex flex-col justify-between"
                                >
                                    <div>
                                        <h2 className="text-xl font-semibold text-blue-400">{data.tittle}</h2>
                                        <p className="text-gray-300 mt-2">{data.description}</p>
                                    </div>
                                    <button
                                        onClick={() => Delteit(data._id)}
                                        className="mt-4 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
             : (
                <div className="text-red-500 text-lg font-semibold">No tasks found!</div>
            )}
        </div>
    );
};

export default Datashow;
