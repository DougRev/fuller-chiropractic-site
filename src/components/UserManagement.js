import React, { useState, useEffect } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const UserManagement = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [users, setUsers] = useState([]);
  const functions = getFunctions();
  const addAdminRole = httpsCallable(functions, 'addAdminRole');

  useEffect(() => {
    // Fetch all users logic (you can get users from Firestore, or Firebase Admin SDK)
    // Here, you'll need a function that lists users
    // Example: setUsers(fetchedUsers);
  }, []);

  const handleAddAdmin = () => {
    addAdminRole({ email })
      .then(result => {
        setFeedback(result.data.message || 'Admin role assigned!');
      })
      .catch(error => {
        setFeedback(error.message);
      });
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">User Management</h3>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter user email"
        className="border p-2 rounded mb-2"
      />
      <button
        onClick={handleAddAdmin}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Make Admin
      </button>
      {feedback && <p>{feedback}</p>}

      {/* Render the list of users (assuming setUsers is populated with data) */}
      <ul>
        {users.map(user => (
          <li key={user.uid}>
            {user.email} - {user.admin ? 'Admin' : 'User'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
