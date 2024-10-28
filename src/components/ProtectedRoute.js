import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const ProtectedRoute = ({ adminOnly = false }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (adminOnly) {
          const userToken = await currentUser.getIdTokenResult();
          if (userToken.claims.admin) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, adminOnly]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/admin-login" />; // Redirect to admin login if user is not logged in
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/unauthorized" />; // Redirect to Unauthorized page if the user is not an admin
  }

  return <Outlet />; // Proceed to the protected route
};

export default ProtectedRoute;
