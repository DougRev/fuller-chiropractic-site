import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const EMS = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Get the image from Firebase Storage
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Initialize Firebase storage
        const imageRef = ref(storage, 'images/ems.webp'); // Adjust path if necessary
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
          <h1 className="text-4xl font-bold text-white">Electrical Muscle Stimulation (EMS)</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">How EMS Works</h2>
        <p className="text-lg text-gray-700 mb-8">
          At Fuller Chiropractic, we offer Electrical Muscle Stimulation (EMS) as an effective therapy to help alleviate pain and promote healing. EMS involves the use of low levels of electrical impulses, which are administered to muscle spasms or painful tissues to reduce pain, decrease inflammation, and speed up the body's natural healing process.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Benefits of EMS Therapy</h3>
        <p className="text-lg text-gray-700 mb-8">
          The electrical impulses used in EMS stimulate the muscles and tissues, helping to increase circulation and release the body's natural pain relievers, known as endorphins. This process not only provides pain relief but also helps to enhance the healing of injured muscles, joints, and soft tissues. Most patients describe the sensation of EMS as a pleasant tingling feeling, making it a comfortable and effective treatment.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Conditions Treated with EMS</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
          <li>Muscle spasms</li>
          <li>Strains and sprains</li>
          <li>Acute and chronic pain</li>
          <li>Soft tissue injuries of the spine and extremities</li>
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

export default EMS;
