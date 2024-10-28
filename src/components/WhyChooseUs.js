import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const WhyChooseUs = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage();
        const imageRef = ref(storage, 'images/consultation.webp');
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  const reasons = [
    {
      title: 'Over 30 Years of Experience',
      description: "Dr. Fuller's extensive hands-on experience ensures you're in capable hands.",
      icon: '👨‍⚕️',
    },
    {
      title: 'Personalized Care',
      description: 'We offer personalized treatments tailored to your unique needs and preferences.',
      icon: '🌟',
    },
    {
      title: 'Advanced Laser Therapy',
      description: 'Reduce treatment time by up to 50% with our cutting-edge laser therapy.',
      icon: '💡',
    },
    {
      title: 'Caring and Compassionate Team',
      description: 'Our friendly staff is committed to providing a warm and welcoming environment.',
      icon: '❤️',
    },
  ];

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8" style={{marginTop:'-50px'}}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">We Are Here for You</h2>
          <p className="text-lg text-gray-600 mb-6">
            Choosing the right healthcare provider can be overwhelming. At Fuller Chiropractic, we provide the expertise, compassion, and personalized care you need to live pain-free.
          </p>
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-2xl mr-4">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              to="/contact-us"
              className="rounded-md bg-blue-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={imageUrl} alt="Doctor with patient" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;