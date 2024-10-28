const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Path to the JSON key file

// Initialize Firebase Admin with the service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'fuller-chiro-d66b1',  // Replace with your actual project ID
});

// Assign admin role to the user
admin.auth().setCustomUserClaims('OrAczV64sMdDCLNeXKEklxAJ2tv1', { admin: true })
  .then(() => {
    console.log('Custom claims set successfully.');
  })
  .catch((error) => {
    console.error('Error setting custom claims:', error);
  });
