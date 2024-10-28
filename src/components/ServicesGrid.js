import React from 'react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  const services = [
    {
      name: 'Chiro Care',
      description: 'Personalized chiropractic treatments to alleviate pain and restore mobility.',
      icon: '🦴',
      link: '/services/chiropractic-care',
    },
    {
      name: 'Laser Therapy',
      description: 'Advanced laser therapy to accelerate healing and reduce inflammation.',
      icon: '💡',
      link: '/services/laser-therapy',
    },
    {
      name: 'EMS',
      description: 'Electrical Muscle Stimulation for pain relief and muscle re-education.',
      icon: '⚡',
      link: '/services/ems',
    },
    {
      name: 'Detox Footbath',
      description: 'Detoxify your body with our relaxing footbath therapy.',
      icon: '🦶',
      link: '/services/detox-footbath',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Our Services</h2>
      </div>
  
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <Link
            to={service.link}
            key={service.name}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-shadow duration-300 ease-in-out min-h-[350px] border border-secondary"
            style={{ borderRadius: '35px' }}
          >
            {/* Service Icon */}
            <div className="w-24 h-24 flex items-center justify-center mb-4 rounded-full bg-white text-white text-4xl">
              {service.icon}
            </div>
  
            {/* Service Title */}
            <h3 className="text-xl font-semibold text-primary">{service.name}</h3>
  
            {/* Service Description */}
            <p className="mt-2 text-accent">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
  
export default ServicesGrid;