 

  import React from 'react';
  import { Route, Routes } from 'react-router-dom';
   import Home from '@/component/Home';
import Login from '@/component/Login';
import Signup from '@/component/Signup';
import TaksGet from '@/component/TaksGet';
import Header from '@/component/Header';
import Datashow from '@/component/Datashow';

  
  const App = () => {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/taskget" element={<TaksGet />} />
          <Route path="/datashow" element={<Datashow />} />
        </Routes>
  
        {/* Navigation Buttons */}
         
      </div>
    );
  };
  
  export default App;
  
