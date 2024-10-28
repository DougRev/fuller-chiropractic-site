import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import NewPatientsPage from './pages/NewPatientsPage';
import MeetTheDoctorPage from './pages/MeetTheDoctorPage';
import ChiropracticCare from './pages/ChiropracticCare';
import LaserTherapy from './pages/LaserTherapy';
import EMS from './pages/EMS';
import DetoxFootbath from './pages/DetoxFootbath';
import Footer from './components/Footer';
import AppointmentForm from './components/NewPatientForm.js';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import UnauthorizedPage from './pages/UnauthorizedPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import PrivacyNotice from './pages/PrivacyNotice';
import ServicesAndFees from './pages/ServicesAndFees';
import ContactUsPage from './pages/ContactUsPage.js';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

function App() {
  const [heroImageUrl, setHeroImageUrl] = useState('');

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const storage = getStorage();
        const heroImageRef = ref(storage, 'images/hero-bg-webp.webp');
        const url = await getDownloadURL(heroImageRef);
        setHeroImageUrl(url);
      } catch (error) {
        console.error('Error fetching hero image:', error);
      }
    };

    fetchHeroImage();
  }, []);


  return (
    <Router>
      <NavBar />
      <div className="pt-16">
        {/* Adjust the top padding to account for the fixed navbar height */}
        <Routes>
          <Route path="/" element={<LandingPage heroImageUrl={heroImageUrl} />} />
          <Route path="/new-patients" element={<NewPatientsPage />} />
          <Route path="/meet-the-doctor" element={<MeetTheDoctorPage />} />
          <Route path="/services/chiropractic-care" element={<ChiropracticCare />} />
          <Route path="/services/laser-therapy" element={<LaserTherapy />} />
          <Route path="/services/ems" element={<EMS />} />
          <Route path="/services/detox-footbath" element={<DetoxFootbath />} />
          <Route path="/book-appointment" element={<AppointmentForm />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
          <Route path='/service-fees' element={<ServicesAndFees />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          
          {/* Protected Route for Admin Dashboard */}
          <Route element={<ProtectedRoute adminOnly />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
