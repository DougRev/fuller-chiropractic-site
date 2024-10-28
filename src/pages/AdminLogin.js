import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user is an admin (if using custom claims)
      const idTokenResult = await user.getIdTokenResult();
      if (idTokenResult.claims.admin) {
        navigate('/admin-dashboard');
      } else {
        console.error('Access denied: Not an admin');
        auth.signOut();
        navigate('/unauthorized'); // Navigate non-admin users to the Unauthorized page
      }
    } catch (err) {
      console.error('Google sign-in failed:', err);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Admin Login</h2>
      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default AdminLogin;
