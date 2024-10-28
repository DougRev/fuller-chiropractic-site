import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import AlertMessages from '../components/AlertMessages';
import MessageManagement from '../components/MessageManagement';
import UserManagement from '../components/UserManagement'; // New User Management component

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('alerts'); // 'alerts', 'messages', or 'user-management'
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/unauthorized');
      }
    });
  }, [auth, navigate]);

  const handleLogout = () => {
    signOut(auth);
    navigate('/admin-login');
  };

  return (
    <div className="container mx-auto p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Log Out
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 rounded-t-lg focus:outline-none ${
            activeTab === 'alerts'
              ? 'bg-white text-blue-600 font-bold border-l border-t border-r -mb-px'
              : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => setActiveTab('alerts')}
        >
          Alerts
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg focus:outline-none ${
            activeTab === 'messages'
              ? 'bg-white text-blue-600 font-bold border-l border-t border-r -mb-px'
              : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => setActiveTab('messages')}
        >
          Messages
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg focus:outline-none ${
            activeTab === 'user-management'
              ? 'bg-white text-blue-600 font-bold border-l border-t border-r -mb-px'
              : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => setActiveTab('user-management')}
        >
          User Management
        </button>
      </div>

      {/* Content */}
      {activeTab === 'alerts' && <AlertMessages />}
      {activeTab === 'messages' && <MessageManagement />}
      {activeTab === 'user-management' && <UserManagement />}
    </div>
  );
};

export default AdminDashboard;
