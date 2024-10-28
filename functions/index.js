const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const functions = require('firebase-functions/v1'); // Or '/v1' depending on your installed version
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();

// Load Firebase function config
const gmailClientId = functions.config().gmail.client_id;
const gmailClientSecret = functions.config().gmail.client_secret;
const gmailRefreshToken = functions.config().gmail.refresh_token;

const oAuth2Client = new google.auth.OAuth2(
  gmailClientId,
  gmailClientSecret,
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({ refresh_token: gmailRefreshToken });

// Define Cloud Function
exports.sendAppointmentEmail = functions.firestore.document('messages/{messageId}') // Updated to 'messages'
  .onCreate(async (snap, context) => {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const message = snap.data(); // Renamed for consistency

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'doug.revelljr@gmail.com',
          clientId: gmailClientId,
          clientSecret: gmailClientSecret,
          refreshToken: gmailRefreshToken,
          accessToken: accessToken.token,
        },
      });

      const mailOptions = {
        from: 'doug.revelljr@gmail.com',
        to: 'turbiddj@yahoo.com',
        subject: 'New Message Received',
        text: `You have a new message from ${message.name} on ${message.date}.`,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('There was an error while sending the email:', error);
    }
  });

