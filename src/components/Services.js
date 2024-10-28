import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Services = () => {
  const [serviceImages, setServiceImages] = useState({
    chiroCare: '',
    laserTherapy: '',
    ems: '',
    detoxFootbath: '',
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storage = getStorage();

        const chiroCareRef = ref(storage, 'images/spine.jpg');
        const laserTherapyRef = ref(storage, 'images/laser-therapy.jpg');
        const emsRef = ref(storage, 'images/ems.jpg');
        const detoxFootbathRef = ref(storage, 'images/detox-footbath.jpg');

        const [chiroCareUrl, laserTherapyUrl, emsUrl, detoxFootbathUrl] = await Promise.all([
          getDownloadURL(chiroCareRef),
          getDownloadURL(laserTherapyRef),
          getDownloadURL(emsRef),
          getDownloadURL(detoxFootbathRef),
        ]);

        setServiceImages({
          chiroCare: chiroCareUrl,
          laserTherapy: laserTherapyUrl,
          ems: emsUrl,
          detoxFootbath: detoxFootbathUrl,
        });
      } catch (error) {
        console.error('Error fetching service images:', error);
      }
    };

    fetchImages();
  }, []);

  const services = [
    {
      name: 'Chiro Care',
      description: 'Personalized chiropractic treatments to alleviate pain and restore mobility.',
      image: serviceImages.chiroCare,
      link: '/services/chiropractic-care',
    },
    {
      name: 'Laser Therapy',
      description: 'Advanced laser therapy to accelerate healing and reduce inflammation.',
      image: serviceImages.laserTherapy,
      link: '/services/laser-therapy',
    },
    {
      name: 'EMS',
      description: 'Electrical Muscle Stimulation for pain relief and muscle re-education.',
      image: serviceImages.ems,
      link: '/services/ems',
    },
    {
      name: 'Detox Footbath',
      description: 'Detoxify your body with our relaxing footbath therapy.',
      image: serviceImages.detoxFootbath,
      link: '/services/detox-footbath',
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <Link
            to={service.link}
            key={service.name}
            className="group relative block rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            <div
              className="relative h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{service.name}</h3>
              </div>
              <div className="absolute inset-0 bg-blue-900 bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;