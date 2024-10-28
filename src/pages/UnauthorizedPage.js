import React from 'react';

const UnauthorizedPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        color: '#333',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://img.icons8.com/clouds/200/000000/lock.png"
          alt="Unauthorized"
          style={{ marginBottom: '20px' }}
        />
        <h1 style={{ fontSize: '2.5rem', color: '#dc3545' }}>
          403 - Unauthorized Access
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
          Oops! You do not have the necessary permissions to view this page.
        </p>
        <p style={{ marginBottom: '40px' }}>
          If you think this is an error, please contact your administrator.
        </p>
        <a
          href="/"
          style={{
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#007bff',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '1rem',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#0056b3';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#007bff';
          }}
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
