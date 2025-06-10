import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Carousel from '../components/carousel';
import Footer from '../components/Footer';
import { FaCheckCircle } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import AuthLayout from '../components/AuthLayout';

export default function RegistrationSuccess() {
  const navigate = useNavigate();

  const countryType = localStorage.getItem('countryType');
  const userId = localStorage.getItem('registeredUserId');
  const displayId = countryType === 'abroad' ? `Email: ${userId}` : `Phone: ${userId}`;

  return (
    <AuthLayout>
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md animate-fade-in">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-1">
              <BackButton />
              Sign Up <span className="text-[#E90064]">K-SMART</span>
            </h2>
            <p className="text-sm text-center text-gray-600 mb-4">Registration</p>

            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-green-500 text-5xl" />
            </div>

            <h3 className="text-lg font-semibold text-center text-blue-800 mb-2">User Account Created</h3>
            <p className="text-sm text-center text-gray-600 mb-2">
              You are about to begin the KYC verification process. This will require you to provide personal information and upload documents.
            </p>

            <p className="text-sm text-center font-medium text-blue-600 mb-6">User ID: {displayId}</p>

            <button
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
              onClick={() => navigate('/kyc')}
            >
              Proceed to KYC
            </button>

            <div className="text-sm text-center mt-4">
              <button className="text-gray-600" onClick={() => navigate('/login')}>
                If you have an account? Login
              </button>
            </div>
          </div>
        </AuthLayout>
  );
}
