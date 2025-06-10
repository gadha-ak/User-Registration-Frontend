// src/components/AuthLayout.jsx
import React from 'react';
import LoginBg from '../assets/LoginBg.png';
import Footer from './Footer';
import Logo from './Logo';
import Carousel from './carousel';

export default function AuthLayout({ children }) {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div className="flex-grow flex">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-8">
          {/* You can optionally pass in left-side children or include Logo/Carousel here */}
          <Logo />
          <Carousel />
        </div>

        {/* Right Side */}
        <div className="flex-[1.2] flex items-center justify-center p-6">
          {children}
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
