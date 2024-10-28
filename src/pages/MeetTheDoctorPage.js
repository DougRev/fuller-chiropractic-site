import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const MeetTheDoctorPage = () => {
  const [doctorImageUrl, setDoctorImageUrl] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDoctorImage = async () => {
      try {
        const storage = getStorage();
        const imageRef = ref(storage, 'images/doc-bg.jpg');
        const url = await getDownloadURL(imageRef);
        setDoctorImageUrl(url);
      } catch (error) {
        console.error('Error fetching doctor image:', error);
      }
    };
    fetchDoctorImage();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: doctorImageUrl
            ? `url(${doctorImageUrl})`
            : 'linear-gradient(to bottom, #e0e0e0, #c0c0c0)', // Placeholder background
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Meet Dr. Garry Fuller</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Doctor's Image Section */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {doctorImageUrl && (
                <img
                  src={doctorImageUrl}
                  alt="Dr. Garry Fuller"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* Doctor's Bio Section */}
          <div className="flex-1">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4">About Dr. Fuller</h2>
              <p className="text-lg text-gray-700 mb-4">
                Dr. Garry Fuller received his Doctor of Chiropractic Degree from Palmer College of Chiropractic in 1987 and opened his Brownsburg practice in November of 1988. Since that time, he has been caring for families ranging in age from newborn to 104 years young.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                He has many hours of post-graduate education in Low-Level Laser Therapy, TMJ Treatment, Extremity Adjusting (including knees, shoulders, ankles, elbows, and wrists), MRI Interpretation, Physical Therapy, as well as 120 hours of Chiropractic Spinal Trauma. These qualifications give him the expertise to help you eliminate pain and start living your life again.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                When asked what the one thing he'd like prospective patients to know about him would be, Dr. Fuller said, "It's important to me that every person knows I'll always treat my patients just as I would treat my own family and how I like to be treated myself. Being able to trust that a chiropractor has your best interests at heart is vital to the healing process."
              </p>
              <p className="text-lg text-gray-700">
                Dr. Fuller is a past president of the Brownsburg Rotary Club and the Palmer Alumni Association, as well as a current member of the Indiana State Chiropractic Association. He has been married to his wife, Dawn, for 23 years, and they have three grown boys who make them very proud. Together, Dr. Fuller and Dawn work to ensure Fuller Chiropractic Clinic is a welcoming and inviting environment for each and every patient.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Dr. Fuller and his team are here to help you on your journey to better health and well-being.
          </p>
          <Link
            to="/contact-us"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-200"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeetTheDoctorPage;
