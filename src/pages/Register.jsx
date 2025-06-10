import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Carousel from '../components/carousel';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import LoginBg from '../assets/LoginBg.png';

export default function Register() {
  const [form, setForm] = useState({
    phoneNumber: '',
    email: '',
    otp: '',
    countryType: true, // true = India (phone), false = Abroad (email)
  });

  const [message, setMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateInputs = () => {
    if (form.countryType) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(form.phoneNumber)) {
        setMessage('Please provide a valid phone number with exactly 10 digits.');
        return false;
      }
    } else {
      if (!form.email.includes('@') || form.email.length < 5) {
        setMessage('Please enter a valid email address.');
        return false;
      }
    }
    return true;
  };

  


  const handleSendOtp = async () => {
  setMessage('');
  if (!validateInputs()) return;

  try {
    const checkPayload = form.countryType
      ? { phoneNumber: form.phoneNumber }
      : { email: form.email };

    const checkResponse = await axios.post('http://localhost:8080/check-duplicate', checkPayload);

    if (checkResponse.data.exists) {
      setMessage(form.countryType ? 'Phone number already registered.' : 'Email already registered.');
      return;
    }

    // If no duplicate, proceed with sending OTP
    setOtpSent(true);
    setMessage('OTP sent successfully.');

  } catch (error) {
    console.error(error);
    setMessage('Error checking for duplicates.');
  }
};


  const handleRegister = async () => {
    setMessage('');
    if (!form.otp.trim()) {
      setMessage('Please enter the OTP.');
      return;
    }

    try {
      const payload = {
        otp: form.otp,
        countryType: form.countryType,
        ...(form.countryType ? { phoneNumber: form.phoneNumber } : { email: form.email }),
      };

      const response = await axios.post('http://localhost:8080/register', payload);

      if (response.data.userId) {
        localStorage.setItem('registeredUserId', response.data.userId);
        localStorage.setItem('countryType', form.countryType ? 'india' : 'abroad');
      }

      navigate('/registration-success');
    } catch (error) {
      console.error(error);
      setMessage(error?.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      {/* Main content */}
      <div className="flex-grow flex">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-8">

          <Logo />
          <Carousel />
        </div>

        {/* Right Side */}
        <div className="flex-[1.2] flex items-center justify-center p-6">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
            <h2 className="text-xl font-bold text-center text-black-500 mb-2">
              <BackButton />
              Sign Up <span className="text-[#E90064]">K-SMART</span>
            </h2>
            <h2 className="text-sm text-center text-gray-600">Registration</h2>
            <p className="text-sm text-center text-gray-600 mb-4">
              To complete your registration, please fill in all fields below
            </p>

            {/* Country Selection */}
            <div className="mb-4">
              <div className="flex gap-10">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="countryType"
                    checked={form.countryType === true}
                    onChange={() =>
                      setForm((prev) => ({ ...prev, countryType: true, email: '', otp: '' }))
                    }
                  />
                  <span>India</span>
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="countryType"
                    checked={form.countryType === false}
                    onChange={() =>
                      setForm((prev) => ({ ...prev, countryType: false, phoneNumber: '', otp: '' }))
                    }
                  />
                  <span>Abroad</span>
                </label>
              </div>
            </div>

            {/* Phone or Email Field */}
            {!otpSent &&
              (form.countryType ? (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    placeholder="xxxxxxxxxx"
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              ))}

            {/* OTP Field */}
            {otpSent && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
                <input
                  type="text"
                  name="otp"
                  value={form.otp}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            )}

            {/* Send OTP / Verify Button */}
            <button
              onClick={otpSent ? handleRegister : handleSendOtp}
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300"
            >
              {otpSent ? 'Verify' : 'Send OTP'}
            </button>

            {/* Message */}
            {message && (
              <div className="text-center text-sm text-red-600 font-medium mt-4">{message}</div>
            )}

            {/* Login Prompt */}
            <div className="text-sm text-center mt-4 text-gray-600">
              If you have an account?{' '}
              <button
                className="text-[#E90064] font-medium hover:underline"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
