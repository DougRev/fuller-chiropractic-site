import React, { useState } from 'react';
import { db, storage } from '../firebase'; // Import the initialized Firestore and Storage instances
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    communicationPreference: 'email',
    message: '',
    document: null,
  });

  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle file input changes
  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      document: e.target.files[0],
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let documentUrl = null;
      if (formData.document) {
        // Upload the document to Firebase Storage
        const storageRef = ref(storage, `documents/${formData.document.name}`);
        await uploadBytes(storageRef, formData.document);
        documentUrl = await getDownloadURL(storageRef);
      }

      // Add timestamp and document URL to form data
      const appointmentData = {
        ...formData,
        date: Timestamp.now(),
        document: documentUrl,
      };

      // Write appointment data to Firestore
      await addDoc(collection(db, 'messages'), appointmentData);

      // Set success message
      setSuccessMessage('Your message has been successfully sent!');

      // Clear form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        communicationPreference: 'email',
        message: '',
        document: null,
      });
    } catch (error) {
      console.error('Error saving message: ', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Have Questions? Contact Us Today!</h2>
      {successMessage && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          <p>{successMessage}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="communicationPreference">
            Preferred Communication Method
          </label>
          <select
            id="communicationPreference"
            name="communicationPreference"
            value={formData.communicationPreference}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Additional Information (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="document">
            Upload Document (Optional)
          </label>
          <input
            type="file"
            id="document"
            name="document"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
