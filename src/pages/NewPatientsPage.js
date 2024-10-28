import React, { useEffect, useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import AppointmentForm from '../components/NewPatientForm.js';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const NewPatientsPage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [formUrl, setFormUrl] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Get the image from Firebase Storage
    const fetchImage = async () => {
      try {
        const storage = getStorage();
        const imageRef = ref(storage, 'images/new-patient.webp');
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    // Get the new patient form from Firebase Storage
    const fetchForm = async () => {
      try {
        const storage = getStorage();
        const formRef = ref(storage, 'confidential-health-record-email-new-june30.pdf');
        const url = await getDownloadURL(formRef);
        setFormUrl(url);
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    };

    fetchImage();
    fetchForm();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: imageUrl
            ? `url(${imageUrl})`
            : 'linear-gradient(to bottom, #e0e0e0, #c0c0c0)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">New Patients</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image and Description */}
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-3xl font-semibold text-center mb-12">What to Expect On Your First Visit</h3>
            <p className="text-lg text-gray-700">
              Your first visit will take approximately one hour. Dr. Fuller will perform a full history and examination,
              including neurological testing, to determine if chiropractic care is indicated in your case. If x-rays are
              needed, Dr. Fuller is equipped to perform them in-house. Based on the examination, Dr. Fuller will develop
              a plan to help you feel your best as soon as possible.
            </p>
          </div>

          {/* New Patient Forms */}
          <div className="flex-1">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">New Patient Forms</h3>
              <p className="text-lg text-gray-700 mb-6">
                Click below to download our new patient forms. Please print, fill them out, and bring them to your first
                appointment.
              </p>
              <a
                href={formUrl}
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300"
              >
                <FaFilePdf className="mr-2" /> Download New Patient Forms
              </a>
              <p className="mt-4 text-sm text-gray-500">
                If you need to fill out the forms at our office, please arrive 20 minutes early.
              </p>
            </div>
          </div>
        </div>

        <AppointmentForm />
      </div>
    </div>
  );
};

export default NewPatientsPage;
