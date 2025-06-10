import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register.jsx';
import RegistrationSuccess from './pages/RegistrationSuccess.jsx';
import KycVerify from './pages/KycVerify.jsx';
import KycSuccess from './pages/KycSuccess.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Logout from './components/Logout.jsx';
import Home from './pages/Home.jsx';
import Declaration from './components/Declaration.jsx';
import FetchAadhaar from './pages/FetchAadhaar.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* This part makes footer stick at bottom */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registration-success" element={<RegistrationSuccess />} />
            <Route path="/kyc" element={<KycVerify />} />
            <Route path="/kyc-success" element={<KycSuccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/declaration" element={<Declaration />} />
            <Route path="/fetch-aadhaar" element={<FetchAadhaar />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
