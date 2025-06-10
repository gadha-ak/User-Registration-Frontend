import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Carousel from '../components/carousel';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Modal from '../components/Modal';
import Declaration from '../components/Declaration';
import AuthLayout from '../components/AuthLayout';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const [showDeclaration, setShowDeclaration] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!userId.trim()) {
      setMessage('Please enter your User ID.');
      return;
    }

    try {
      const payload = userId.includes('@')
        ? { email: userId }
        : { phoneNumber: userId };

      const res = await axios.post('http://localhost:8080/check-user', payload);
      setMessage('OTP sent successfully.');
      setOtpSent(true);
    } catch (err) {
      setMessage(err?.response?.data?.message || 'Failed to check user.');
      setOtpSent(false);
    }
  };

  const handleLogin = async () => {
    try {
      const payload = { otp };
      if (userId.includes('@')) {
        payload.email = userId;
      } else {
        payload.phoneNumber = userId;
      }

      const res = await axios.post('http://localhost:8080/login', payload);
      setMessage(res.data.message);

      if (res.data.message === 'Login successful.') {
        navigate('/dashboard');
      }
    } catch (err) {
      setMessage(err?.response?.data?.message || 'Login failed.');
    }
  };

  return (
    // <div className="flex flex-col min-h-screen bg-slate-100">

    //   {/* Content area */}
    //   <div className="flex-grow flex">
    //     {/* Left Side */}
    //     <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-white to-gray-100 p-8">
    //       <Logo />
    //       <Carousel />
    //     </div>

    //     {/* Right Side */}
    <AuthLayout>
        <div className="flex-[1.2] flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
            <h2 className="text-xl font-bold text-center mb-2">
              <BackButton />
              Sign in <span className="text-[#E90064]">K-SMART</span>
            </h2>
            <p className="text-sm text-center text-gray-600 mb-6">
              Please enter your login details below
            </p>

            {!otpSent && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter here"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            )}

            {otpSent && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            )}

            <button
              onClick={otpSent ? handleLogin : handleSendOtp}
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300"
            >
              {otpSent ? 'Login' : 'Send OTP'}
            </button>

            {message && (
              <div className="text-center text-sm text-blue-600 font-medium mt-4">{message}</div>
            )}

            <div className="text-sm text-center mt-4 text-gray-600">
              Don’t have an account?{' '}
              <button
                className="text-[#E90064]"
                onClick={() => setShowDeclaration(true)}
              >
                Create Account
              </button>
              <br />
              <button
                className="text-blue-600 mt-2"
                onClick={() => alert('Redirect to forgot')}
              >
                Forgot User ID?
              </button>
            </div>
          </div>
        </div>
        <Modal isOpen={showDeclaration} onClose={() => setShowDeclaration(false)}>
         <Declaration closeModal={() => setShowDeclaration(false)} />
       </Modal>
        </AuthLayout>
      // </div>

      // {/* Footer always at bottom */}
      //<div className="mt-auto">
        
      //</div>

      // {/* Modal Declaration */}
      // <Modal isOpen={showDeclaration} onClose={() => setShowDeclaration(false)}>
      //   <Declaration closeModal={() => setShowDeclaration(false)} />
      // </Modal>
    // </div>
  );
}
