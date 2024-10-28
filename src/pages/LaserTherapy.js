import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const LaserTherapy = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Get the image from Firebase Storage
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Initialize Firebase storage
        const imageRef = ref(storage, 'images/laser-therapy.jpg'); // Adjust path if necessary
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
          <h1 className="text-4xl font-bold text-white">Erchonia Laser Therapy</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">What is Low Level Laser?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Low Level Laser is cutting-edge technology that can effectively reduce your entire treatment time by 50%. Not all lasers are created equally, and at Fuller Chiropractic Clinic, we utilize only the Erchonia family of lasers. Erchonia has 15 FDA market clearances, and their commitment to scientific and clinical research makes them the recognized world leader in low-level laser technology.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Also called photobiomodulation therapy, low-level laser is designed to repair tissue, reduce pain and inflammation, and increase range of motion.
        </p>

        {/* New FX 635 Laser Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-3xl font-bold mb-4">Introducing the New FX 635 Laser</h3>
          <p className="text-lg text-gray-700 mb-6">
            The world's first and only laser on the market designed to relieve Chronic Low Back Pain. Best of all, the Erchonia FX 635 Laser is FDA market cleared and proven to work without the need for invasive surgery or the potentially harmful prescription of opioids.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Do you have heel pain? Discover the fastest way to treat Plantar Fasciitis with the FX 635 Laser. Our patients have seen relief from the following conditions along with many more! Call us today to schedule an appointment.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
            <li>Chronic Low Back Pain</li>
            <li>Plantar Fasciitis</li>
            <li>Shoulder Pain</li>
            <li>Sports Injuries</li>
            <li>Tendonitis</li>
            <li>Tennis Elbow</li>
            <li>Rib Pain</li>
            <li>Knee/Ankle Pain</li>
            <li>Post Surgical Pain</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mb-4">How Laser Therapy Works</h3>
        <p className="text-lg text-gray-700 mb-8">
          At Fuller Chiropractic, we use the advanced Erchonia Low Level Laser to help restore your body's natural function and improve your overall well-being. This non-invasive treatment utilizes phototherapy to penetrate deeply into the skin, repairing damaged cells and restoring their ability to function within normal parameters.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Restoring Muscle Strength and Function</h3>
        <p className="text-lg text-gray-700 mb-8">
          One of the most common uses of the laser in our office is to restore strength to weakened muscle groups. This can happen due to injury or improper movement patterns, often leading to chronic pain. Many of our patients are surprised to learn they have weak muscle groups in areas such as the core, lower back, neck, and shoulders—muscles they weren't even aware of being affected. These weaknesses can contribute to pain and strain throughout the body, including the spine, extremities, and jaw.
        </p>
        <h3 className="text-2xl font-semibold mb-4">What to Expect</h3>
        <p className="text-lg text-gray-700 mb-8">
          The Laser Therapy Protocol typically consists of 6 to 10 treatments, but many patients experience noticeable improvements after just the first session. As the body begins to function at an optimal level, core stability is enhanced, range of motion is increased, and patients report improvements in coordination, balance, and control over their movements. Additionally, the laser's programmable technology allows us to target specific conditions, effectively reducing inflammation due to sprains, strains, and even post-surgical recovery.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Benefits of Erchonia Laser Therapy</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
          <li>Reduction of Pain</li>
          <li>Sprain/Strain Healing</li>
          <li>Restoration of Core Muscle Control</li>
          <li>Sports Performance Enhancement</li>
          <li>Increased Range of Motion</li>
          <li>Rotator Cuff Syndrome Therapy</li>
          <li>Post-Surgery Tissue Repair</li>
        </ul>

        {/* Video Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold mb-4">Erchonia FX Laser Video</h3>
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://0201.nccdn.net/1_2/000/000/0a3/a98/Erchonia-FX-635-Sizzle-Video---Back-Pain---Heel-Pain.mp4"
              muted
              autoPlay
              title="Erchonia FX 635 Laser Video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

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

export default LaserTherapy;
