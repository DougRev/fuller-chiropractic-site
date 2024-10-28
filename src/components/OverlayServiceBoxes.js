import React from 'react';
import { Link } from 'react-router-dom';

const OverlayServiceBoxes = () => {
  const services = [
    {
      title: 'Chiro Care',
      description: 'Personalized chiropractic treatments',
      icon: '🦴',
      link: '/services/chiropractic-care',
    },
    {
      title: 'Laser Therapy',
      description: 'Accelerate healing and reduce inflammation.',
      icon: '💡',
      link: '/services/laser-therapy',
    },
    {
      title: 'Electrical Muscle Stim',
      description: 'Pain relief and muscle re-education.',
      icon: '⚡',
      link: '/services/ems',
    },
    {
      title: 'Detox Footbath',
      description: 'Detoxify your body with our relaxing footbath therapy.',
      icon: '🦶',
      link: '/services/detox-footbath',
    },
  ];

  return (
    <div className="relative py-4 bg-white">
      <div className="relative z-9 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-stretch -mt-1">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="group flex flex-col items-center bg-gray-800 p-4 sm:p-6 rounded-[35px] shadow-lg transition-all duration-300 ease-in-out w-full lg:w-1/4 lg:transform lg:-translate-y-1/2 lg:min-h-[250px] hover:bg-accent hover:shadow-2xl"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full text-white text-4xl mb-4 group-hover:text-black">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-black">
                {service.title}
              </h3>
              <p className="text-white mb-4 text-center group-hover:text-black">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverlayServiceBoxes;
