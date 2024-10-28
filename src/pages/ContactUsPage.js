import React, { useEffect, useState } from 'react';
import ContactUsForm from '../components/ContactUsForm';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const ContactUsPage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Get the image from Firebase Storage
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Initialize Firebase storage
        const imageRef = ref(storage, 'images/contact-us-bg.webp'); // Adjust path if necessary
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
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto py-16 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Get in Touch Box */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-4">
              We would love to hear from you! Whether you have questions about our services, want to schedule an appointment, or need more information, our team is here to help.
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                <strong>Address:</strong> 515 N Green St Ste 100, Brownsburg, IN 46112
              </p>
              <p className="text-lg text-gray-700">
                <strong>Phone:</strong> (317) 852-8885
              </p>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> info@fullerchiropractic.com
              </p>
              <p className="text-lg text-gray-700">
                <strong>Office Hours:</strong>
                <br />
                Monday - Thursday: 8:00 AM - 12:15 PM & 2:45 PM - 5:15 PM
                <br />
                Friday - Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Us Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <ContactUsForm />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
          <div className="w-full h-64 md:h-96">
            <iframe
              title="Fuller Chiropractic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509616!2d-86.3996914846833!3d39.838920979437576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b55e3c147bdf3%3A0x7f2e4b2b3eae2f0e!2sFuller%20Chiropractic%20Clinic!5e0!3m2!1sen!2sus!4v1609463434321!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
