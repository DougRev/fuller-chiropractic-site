import React, { useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import CustomHeroSection from '../components/HeroSection';
import OverlayServiceBoxes from '../components/OverlayServiceBoxes';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsBanner from '../components/StatsBanner';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQ from '../components/FAQ';

const LandingPage = ({ heroImageUrl }) => {
  const [activeAlerts, setActiveAlerts] = useState([]);
  const [dismissedAlertIds, setDismissedAlertIds] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);


    const fetchActiveAlerts = async () => {
      try {
        // Get dismissed alerts from localStorage
        const dismissed = JSON.parse(localStorage.getItem('dismissedAlertIds')) || [];
        setDismissedAlertIds(dismissed);

        const alertsCollection = collection(db, 'alerts');
        const q = query(alertsCollection, where('isActive', '==', true));
        const querySnapshot = await getDocs(q);
        const alertsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filter out dismissed alerts
        const filteredAlerts = alertsData.filter(
          (alert) => !dismissed.includes(alert.id)
        );

        setActiveAlerts(filteredAlerts);
      } catch (error) {
        console.error('Error fetching active alerts:', error);
      }
    };

    fetchActiveAlerts();
  }, []);

  const handleDismissAlert = (alertId) => {
    const updatedAlerts = activeAlerts.filter((alert) => alert.id !== alertId);
    setActiveAlerts(updatedAlerts);

    const updatedDismissed = [...dismissedAlertIds, alertId];
    setDismissedAlertIds(updatedDismissed);
    localStorage.setItem('dismissedAlertIds', JSON.stringify(updatedDismissed));
  };

  return (
    <div className="bg-gray-100">
      {/* Display active alerts */}
      {activeAlerts.length > 0 && (
        <div className="bg-red-600 text-white py-4 px-6">
          {activeAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex justify-between items-center mb-2"
            >
              <p className="text-white text-lg">{alert.message}</p>
              <button
                onClick={() => handleDismissAlert(alert.id)}
                className="text-white text-2xl font-bold focus:outline-none"
                aria-label="Dismiss alert"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      <CustomHeroSection heroImageUrl={heroImageUrl} />

      {/* Services Section */}
      <div className="bg-gray-100" id="services-section">
        <OverlayServiceBoxes />
      </div>

      <div>
        <WhyChooseUs />
      </div>

      <div>
        <StatsBanner />
      </div>

      {/* Testimonials Section */}
      <TestimonialSlider />

      <FAQ />
    </div>
  );
};

export default LandingPage;
