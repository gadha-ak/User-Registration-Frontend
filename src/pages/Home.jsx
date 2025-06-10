import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'; // Adjust path as needed
import Declaration from '../components/Declaration'; // Adjust path as needed

export default function Home() {
  const navigate = useNavigate();
  const [showDeclaration, setShowDeclaration] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-white shadow">
        <div className="flex items-center space-x-4">
          <img src="/ksmart2.png" alt="KSmart Logo" className="h-8" />
          <img src="/gov-logo.png" alt="Gov Logo" className="h-8" />
          <img src="/lsgd-logo.png" alt="LSGD Logo" className="h-8" />
          <span className="text-sm text-gray-600">
            Government of Kerala · Local Self Government Department
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <select className="text-sm">
            <option>English</option>
            <option>മലയാളം</option>
          </select>
          <button className="text-sm">About</button>
          <button className="text-sm">K-Suite</button>
          <button className="text-sm">Support</button>
          <button
            className="px-4 py-1 border border-pink-600 text-pink-600 rounded-full"
            onClick={() => setShowDeclaration(true)}
          >
            Register
          </button>
          <button
            className="px-4 py-1 bg-pink-600 text-white rounded-full"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>

      {/* Notification Bar */}
      <div className="bg-blue-900 text-white text-sm flex justify-between items-center px-4 py-2">
        <marquee behavior="scroll" direction="left">
          ⓘ KSMART SCHOOL OF TECHNOLOGIES !!!
        </marquee>
        
      </div>

      {/* Main Banner */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-slate-100 flex-grow">
        <div className="mt-6 md:mt-0">
          <img src="/leaders.png" alt="Leaders" className="h-100" />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-white shadow-inner">
        © 2025 KSmart. All rights reserved.
      </footer>

      {/* Modal Declaration */}
      <Modal isOpen={showDeclaration} onClose={() => setShowDeclaration(false)}>
        <Declaration closeModal={() => setShowDeclaration(false)} />
      </Modal>
    </div>
  );
}
