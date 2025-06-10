// src/components/Footer.jsx

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo or Image */}
        {/* <div className="mb-4 md:mb-0">
          <img src="/footer1.png" alt="K-SMART Logo" className="h-12" />
        </div> */}

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
            Copyright @ 2024
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
            Ksuite, Government of Kerala
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
            |Designed and Developed by Information Kerala mission
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-gray-500 text-sm text-center md:text-right">
          Terms & Conditions   Privacy Policy.
        </div>
      </div>
    </footer>
  );
}
