import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../components/Logo';
import Carousel from '../components/carousel';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import AuthLayout from '../components/AuthLayout';

export default function KycVerify() {
  const navigate = useNavigate();

  const [aadhaarNo, setAadhaarNo] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [kycSuccess, setKycSuccess] = useState(false);

  const countryType = localStorage.getItem('countryType');
  const registeredUserId = localStorage.getItem('registeredUserId');

  const email = countryType === 'abroad' ? registeredUserId : null;
  const phoneNumber = countryType === 'india' ? registeredUserId : null;

  const sendOtp = () => {
    if (!aadhaarNo.match(/^\d{12}$/)) {
      setError('Please enter a valid 12-digit Aadhaar number.');
      return;
    }

    setError('');
    setOtpSent(true);
    setSuccessMsg('OTP has been sent to your mobile/email.');
  };

  const verifyKyc = async () => {
    setError('');
    setSuccessMsg('');

    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/kyc', {
        aadhaarNo,
        otp,
        email: email || null,
        phoneNumber: phoneNumber || null,
      });

      if (res.data.kycStatus) {
        setSuccessMsg(res.data.message);
        setKycSuccess(true);
      } else {
        setError(res.data.message || 'KYC verification failed.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <AuthLayout>
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md animate-fade-in">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-1">
              <BackButton />
              Verification <span className="text-[#E90064]">KYC</span>
            </h2>
            <p className="text-sm text-center text-gray-600 mb-6">
              Confirming your identity to ensure security, trust, and smooth experience.
            </p>

            {/* OTP Sent Block */}
            {otpSent ? (
              <>
                {successMsg && (
                  <div className="bg-green-100 text-green-800 text-sm p-2 rounded mb-4 border border-green-400">
                    {successMsg}
                  </div>
                )}
                {error && (
                  <div className="bg-red-100 text-red-700 text-sm p-2 rounded mb-4 border border-red-400">
                    {error}
                  </div>
                )}

                {!kycSuccess && (
                  <>
                    <label className="text-sm font-medium text-gray-700">Enter OTP</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-2"
                    />
                    <button
                      className="w-full bg-pink-600 text-white py-2 rounded-md mt-2 hover:bg-pink-700"
                      onClick={verifyKyc}
                    >
                      Verify
                    </button>
                    <p
                      className="text-sm mt-3 text-right text-blue-600 cursor-pointer"
                      onClick={sendOtp}
                    >
                      Resend OTP
                    </p>
                  </>
                )}

                {kycSuccess && (
                  <button
                    className="w-full bg-green-600 text-white py-2 rounded-md mt-4 hover:bg-green-700"
                    onClick={() => navigate('/kyc-success')}
                  >
                    Continue
                  </button>
                )}
              </>
            ) : (
              <>
                {error && (
                  <div className="bg-red-100 text-red-700 text-sm p-2 rounded mb-4 border border-red-400">
                    {error}
                  </div>
                )}
                <label className="text-sm font-medium text-gray-700">Aadhaar Number</label>
                <input
                  type="text"
                  value={aadhaarNo}
                  onChange={(e) => setAadhaarNo(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-2"
                />
                <button
                  className="w-full bg-pink-600 text-white py-2 rounded-md mt-2 hover:bg-pink-700"
                  onClick={sendOtp}
                >
                  Get OTP
                </button>
              </>
            )}

            <div className="text-sm text-center mt-6">
              <p>
                I don’t have Aadhaar?{' '}
                <span className="text-blue-600 cursor-pointer">Click here</span>
              </p>
            </div>
          </div>
    </AuthLayout>
  );
}
