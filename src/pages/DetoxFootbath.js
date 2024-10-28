import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const DetoxFootbath = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Get the image from Firebase Storage
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Initialize Firebase storage
        const imageRef = ref(storage, 'images/detox-footbath.jpg'); // Adjust path if necessary
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
          <h1 className="text-4xl font-bold text-white">Detoxification Footbath</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">How the Detox Footbath Works</h2>
        <p className="text-lg text-gray-700 mb-8">
          At Fuller Chiropractic, we utilize the Erchonia EBPro Ion Therapy system to help enhance your body's natural detoxification process. This gentle therapy is designed to support your overall health and well-being by removing toxins from your body in a natural and effective manner.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          The detox footbath involves immersing your feet into a water bath that is used in conjunction with a metal array to create an ionic field. By making electrical contact with the primary meridians of the body, this ionic field helps facilitate the body's natural detoxification process. The meridians serve as pathways for the release of toxins, allowing your body to remove harmful substances more efficiently.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Benefits of Detox Footbath Therapy</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
          <li>Helps boost energy levels and reduce fatigue</li>
          <li>Supports the body's natural detoxification, improving skin health</li>
          <li>Promotes a stronger immune response</li>
          <li>Improves mental clarity and focus</li>
        </ul>

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

export default DetoxFootbath;
