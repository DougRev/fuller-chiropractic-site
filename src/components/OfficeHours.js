// src/components/OfficeHours.js

import React from 'react';

const OfficeHours = () => {
  const hours = [
    { day: 'Monday, Tuesday, Wednesday, & Thursday', time: ['8:00 AM - 12:15 PM',  '2:45 PM - 5:15 PM'] },
    { day: 'Friday, Saturday & Sunday', time: 'Closed' },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Office Hours</h2>
      <ul className="text-lg text-gray-700">
        {hours.map((hour, index) => (
          <li key={index} className="border-b border-gray-200 py-4">
            <div className="flex justify-between">
              <span className="font-semibold">{hour.day}</span>
              {Array.isArray(hour.time) ? (
                <div className="text-right">
                  {hour.time.map((t, i) => (
                    <div key={i}>{t}</div>
                  ))}
                </div>
              ) : (
                <span>{hour.time}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfficeHours;