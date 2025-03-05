import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
     
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Stay Organized, Stay Productive!
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Manage your tasks efficiently and get more done with ease.
        </p>

      
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link to="/login">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition">
              Signup
            </button>
          </Link>
        </div>
      </div>

     
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-gray-800 bg-opacity-60 shadow-xl rounded-lg">
          <h3 className="text-xl font-semibold">📌 Add & Manage Tasks</h3>
          <p className="text-gray-300 mt-2">Quickly create, edit, and organize tasks with ease.</p>
        </div>
        <div className="p-6 bg-gray-800 bg-opacity-60 shadow-xl rounded-lg">
          <h3 className="text-xl font-semibold">🎨 Drag & Drop</h3>
          <p className="text-gray-300 mt-2">Easily reorder tasks with an intuitive drag-and-drop feature.</p>
        </div>
        <div className="p-6 bg-gray-800 bg-opacity-60 shadow-xl rounded-lg">
          <h3 className="text-xl font-semibold">🌙 Dark Mode</h3>
          <p className="text-gray-300 mt-2">Switch between light and dark themes for better visibility.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
