import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Carousel from '../components/carousel';
import Footer from '../components/Footer';
import { FaCheckCircle } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import AuthLayout from '../components/AuthLayout';

export default function KycSuccess() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('registeredUserId') || 'sample@gmail.com';

  return (
    <AuthLayout>
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md text-center animate-fade-in">
            <BackButton />

            <h2 className="text-xl font-bold text-gray-800 mb-1">
              Verification <span className="text-[#E90064]">KYC</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Confirming your identity to ensure security, trust, and a smooth experience.
            </p>

            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-green-500 text-6xl" />
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mb-1">KYC Verification Success!</h3>
            <p className="text-sm text-gray-600 mb-4">
              You can now access KSMART services. Click <strong>Proceed</strong> to continue.
            </p>

            <p className="text-sm font-medium text-blue-600 mb-6">User ID: {userId}</p>

            <button
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
              onClick={() => navigate('/dashboard')}
            >
              Proceed
            </button>

            <div className="text-sm mt-4">
              <span className="text-gray-600">Already have an account? </span>
              <button
                className="text-blue-600 font-medium hover:underline"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            </div>
          </div>
        </AuthLayout>
  );
}
