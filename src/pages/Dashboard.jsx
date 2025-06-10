import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Footer from '../components/Footer'; // ✅ import your Footer

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main layout area */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
          <h1 className="text-2xl font-bold text-[#E90064] mb-6">K-SMART</h1>
          <nav className="space-y-4">
            <button
              className="flex items-center gap-2 text-gray-700 hover:text-[#E90064]"
              onClick={() => navigate('#')}
            >
              <FaChartBar /> Dashboard
            </button>
            <button
              className="flex items-center gap-2 text-gray-700 hover:text-[#E90064]"
              onClick={() => navigate('#')}
            >
              <FaUser /> Profile
            </button>
            <button
              className="flex items-center gap-2 text-gray-700 hover:text-[#E90064]"
              onClick={() => navigate('#')}
            >
              <FaCog /> Settings
            </button>
            <button
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 mt-10"
              onClick={() => navigate('/logout')}
            >
              <FaSignOutAlt /> Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
            <button className="md:hidden bg-[#E90064] text-white px-4 py-2 rounded">Menu</button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-sm text-gray-500">Users</h3>
              <p className="text-2xl font-bold text-[#E90064]">1,250</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-sm text-gray-500">KYC Verified</h3>
              <p className="text-2xl font-bold text-[#E90064]">1,100</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-sm text-gray-500">Pending Requests</h3>
              <p className="text-2xl font-bold text-[#E90064]">150</p>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="mt-10 bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Welcome to dashboard</h3>
            <p className="text-sm text-gray-600">Created by Gadha A K</p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
