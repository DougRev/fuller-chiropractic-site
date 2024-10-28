import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const ChiropracticCare = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Get the image from Firebase Storage
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Initialize Firebase storage
        const imageRef = ref(storage, 'images/spine.jpg'); // Adjust path if necessary
        const url = await getDownloadURL(imageRef); // Fetch the image URL
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${imageUrl})` }}
        loading="lazy"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Chiropractic Care</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Personalized Techniques for Your Comfort</h2>
        <p className="text-lg text-gray-700 mb-8">
          At Fuller Chiropractic, we understand that every patient is unique, and so is their path to better health. Dr. Fuller utilizes a variety of chiropractic techniques to tailor treatment for each individual, ensuring the best possible outcomes.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Over 30 Years of Expertise</h3>
        <p className="text-lg text-gray-700 mb-8">
          With over 30 years of experience in chiropractic care, Dr. Fuller has helped countless patients improve their quality of life. His extensive background, which also includes training in physical therapy and sports medicine, enables him to effectively treat a wide range of conditions, including sports injuries and musculoskeletal issues.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Comprehensive Care Beyond Adjustments</h3>
        <p className="text-lg text-gray-700 mb-8">
          At Fuller Chiropractic, we offer a holistic approach to your well-being. Along with chiropractic adjustments, we provide services such as low-level laser therapy, detox footbaths, and nutraceuticals. These additional treatments help address a variety of conditions, including disc issues, sciatica, chronic pain, gastrointestinal complaints, osteopenia, and elevated cholesterol.
        </p>

        <div className="text-center mt-12">
          <Link
            to="/contact-us"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChiropracticCare;
