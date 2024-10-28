// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <strong className="block text-lg mb-2">Fuller Chiropractic</strong>
            <p className="text-gray-400">515 N Green St Ste 100</p>
            <p className="text-gray-400">Brownsburg, IN 46112</p>
            <p className="text-gray-400">Phone: (317) 852-8885</p>
            <p className="text-gray-400">Email: info@fullerchiropractic.com</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline text-gray-400">Home</Link>
              </li>
              <li>
                <Link to="/new-patients" className="hover:underline text-gray-400">New Patients</Link>
              </li>
              <li>
                <Link to="/meet-the-doctor" className="hover:underline text-gray-400">Meet the Doctor</Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline text-gray-400">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-gray-400">Contact Us</Link>
              </li>
              <li>
              <Link to="/service-fees" className="hover:underline text-gray-400">Services & Fees</Link>
              </li>
              <li>
              <Link to="/privacy-notice" className="hover:underline text-gray-400">Privacy Notice</Link>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-4 text-gray-400">
              <div>
                <strong>Monday - Thursday:</strong>
                <p>8:00 AM - 12:15 PM, 2:45 PM - 5:15 PM</p>
              </div>
              <div>
                <strong>Friday - Sunday:</strong>
                <p>Closed</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 text-gray-400"
                >
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 text-gray-400"
                >
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 text-gray-400"
                >
                  <FaInstagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-12 text-sm text-gray-500">
          <p>
            In accordance with Section 1557 of the Affordable Care Act (ACA), all patients are treated by Fuller Chiropractic Clinic without discrimination to age, race, creed, national origin, color, sex, gender identity, religion, ancestry, sexual orientation, marital status, disability, economic status, or educational background.
          </p>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Fuller Chiropractic. All rights reserved.</p>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;