// src/pages/FetchAadhaar.jsx
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function FetchAadhaar() {
  const navigate = useNavigate();

  const dummyData = {
    name: 'Sara Sebastian Johnson',
    dob: '12-12-2000',
    gender: 'Female',
    aadhaar: '1233 4445 1233',
    photo: 'https://via.placeholder.com/100' // Replace with actual fetched image
  };

  return (
    <AuthLayout>
    
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
          <span className="text-[#E90064]">Verification</span> KYC
        </h2>
        <p className="text-sm text-center text-gray-600 mb-4">
          Confirming your identity to ensure security, trust, and smooth experience.
        </p>

        <div className="bg-green-100 text-green-800 text-sm p-2 rounded mb-4 border border-green-400 text-center">
          ✅ Fetched your Aadhaar details for verification.
        </div>

        <div className="flex items-center gap-4 mb-4">
          <img src={dummyData.photo} alt="User" className="w-16 h-16 rounded-full object-cover" />
          <div className="text-sm">
            <p className="font-medium">Your Name: {dummyData.name}</p>
            <p>Document Number: {dummyData.aadhaar}</p>
            <p>Date of Birth: {dummyData.dob}</p>
            <p>Gender: {dummyData.gender}</p>
          </div>
        </div>

        <button
          className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700"
          onClick={() => navigate('/kyc-success')}
        >
          Continue
        </button>
      </div>
    
    </AuthLayout>
  );
}
