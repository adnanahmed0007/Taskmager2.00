import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <>
        <div className="mt-6 flex space-x-4">
                  <Link to="/">
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md transition">
                      Home
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md transition">
                      Login
                    </button>
                  </Link>
                  <Link to="/sign">
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg shadow-md transition">
                      Signup
                    </button>
                  </Link>
                  <Link to="/taskget">
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg shadow-md transition">
                      Tasks
                    </button>
                  </Link>
                  <Link to="/datashow">
                    <button className="px-4 py-2 bg-pink-600 hover:bg-purple-500 text-white rounded-lg shadow-md transition">
                      Datashow
                    </button>
                  </Link>
                </div>
      </>
    </div>
  )
}

export default Header
