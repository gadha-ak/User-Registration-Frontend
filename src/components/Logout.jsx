import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session data
    localStorage.removeItem('registeredUserId');
    localStorage.removeItem('countryType');

    // Redirect to login page
    navigate('/');
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="text-center p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Logging Out...</h1>
        <p className="text-gray-600 text-sm">Please wait while we redirect you.</p>
      </div>
    </div>
  );
}
