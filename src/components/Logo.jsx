// src/components/Logo.jsx

import React from 'react';

export default function Logo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/ksmart3.png" alt="Kerala Logo" className="h-16 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-700 mb-2">Welcome to</h1>
      <img src="/ksmart2.png" alt="Ksmart Logo" className="h-16 mb-4" />
    </div>
  );
}
