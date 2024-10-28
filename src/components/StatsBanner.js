import React from 'react';

const StatsBanner = () => {
  const stats = [
    {
      value: '30+',
      label: 'Years of Experience',
      icon: '📅',
    },
    {
      value: '750+',
      label: 'Happy Clients',
      icon: '😊',
    },
    {
      value: '96%',
      label: 'Success Rate',
      icon: '✅',
    },
    {
        value: '100+',
        label: 'Referrals from Satisfied Patients',
        icon: '👍',
    },
  ];

  return (
    <div className="bg-neutral text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
                <span className="mr-2 text-2xl">{stat.icon}</span>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg flex items-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;