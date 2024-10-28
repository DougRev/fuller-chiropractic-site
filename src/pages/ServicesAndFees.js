import React from 'react';
import { Link } from 'react-router-dom';

const ServicesAndFees = () => {
  const services = [
    {
      category: "Adjustments",
      services: [
        { name: "Chiropractic Adj. (1-2 Areas)", code: "98940", price: "$45" },
        { name: "Chiropractic Adj. (3-4 Areas)", code: "98941", price: "$53" },
        { name: "Chiropractic Adj. (5 Areas)", code: "98942", price: "$55" },
        { name: "Extra-Spinal Adj.", code: "98943", price: "$39" },
      ],
    },
    {
      category: "Laser Procedures",
      services: [
        { name: "Office Visit with Therapy", code: "99211-52", price: "$36" },
        { name: "Low-Level Laser Therapy", code: "97112", price: "$45" },
        { name: "Untitled Low-Level Laser", code: "S8948", price: "$47" },
        { name: "Fx Laser Treatment - 10 min", code: "S8948FX10", price: "$75" },
        { name: "Fx Laser Treatment - 20 min", code: "S8948FX20", price: "$100" },
      ],
    },
    {
      category: "Exams / X-Ray",
      services: [
        { name: "Problem, Focused", code: "99201", price: "$69" },
        { name: "Expanded Problem", code: "99202", price: "$89" },
        { name: "Detailed", code: "99203", price: "$109" },
        { name: "Comprehensive", code: "99204", price: "$245" },
      ],
    },
    {
      category: "Established Patient Exam",
      services: [
        { name: "Brief Exam-Estab.", code: "99211-25", price: "$55" },
        { name: "Expanded Exam-Estab.", code: "99212-25", price: "$75" },
        { name: "Detailed Exam-Estab.", code: "99213-25", price: "$139" },
        { name: "Comp. Exam-Estab.", code: "99214-25", price: "$225" },
      ],
    },
    {
      category: "Exercises",
      services: [
        { name: "Therapeutic Exercises", code: "97110", price: "$75" },
        { name: "Rocker Board", code: "97112", price: "$75" },
        { name: "Ther. Exercise Instruct.", code: "97535", price: "$75" },
        { name: "Gait Training", code: "97116", price: "$75" },
        { name: "Heel Lifts", code: "L3320", price: "$14" },
      ],
    },
    {
      category: "EMS",
      services: [
        { name: "EMS 15 Min.", code: "G0283", price: "$39" },
        { name: "EMS Pads", code: "A4556", price: "$9" },
      ],
    },
    {
      category: "Child Adjustment",
      services: [
        { name: "Child Adj. (0 - 8 yrs)", code: "99211-52", price: "$25" },
        { name: "Child Adj. (9 - 15 yrs)", code: "99213-52", price: "$39" },
      ],
    },
    {
      category: "Cervical X-Rays",
      services: [
        { name: "1-2 View Cervical X-Ray", code: "72040-52", price: "$70" },
        { name: "3 View Cervical X-Ray", code: "72040", price: "$105" },
        { name: "5 View Cervical X-Ray", code: "72050", price: "$175" },
        { name: "7 View Cerv. Davis Study", code: "72052", price: "$245" },
      ],
    },
    {
      category: "Thoracic X-Rays",
      services: [
        { name: "Thoracic LAT X-Ray", code: "72072", price: "$70" },
        { name: "1 View Thoracic X-Ray", code: "72070-52", price: "$70" },
        { name: "2 View Thoracic X-Ray", code: "72070", price: "$105" },
      ],
    },
    {
      category: "Lumbar X-Rays",
      services: [
        { name: "1 View Lumbar X-Ray", code: "72100-52", price: "$70" },
        { name: "2 View Lumbar X-Ray", code: "72100", price: "$105" },
        { name: "3 View Lumbar X-Ray", code: "72110-52", price: "$138" },
        { name: "4 View Lumbar X-Ray", code: "72110", price: "$184" },
      ],
    },
    {
      category: "Extremity X-Rays",
      services: [
        { name: "2 View Shoulder X-Ray", code: "73030", price: "$105" },
        { name: "2 View Hand X-Ray", code: "73100", price: "$105" },
        { name: "2 View Finger X-Ray", code: "73140", price: "$105" },
        { name: "1 or 2 View Knee X-Ray", code: "73560", price: "$105" },
        { name: "2 View Ankle X-Ray", code: "73600", price: "$105" },
        { name: "2 View Foot X-Ray", code: "73620", price: "$105" },
      ],
    },
    {
      category: "Footbath",
      services: [
        { name: "Footbath", code: "97039FB", price: "$48" },
      ],
    },
    {
      category: "OA Forms",
      services: [
        { name: "OA Forms - Initial", code: "96156", price: "$70" },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Fuller Chiropractic Clinic</h1>
      <p className="text-lg text-center mb-8">
        *This is a list of our most common services. There may be additional services provided that are not listed on this price sheet.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        {services.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Service</th>
                  <th className="border border-gray-300 px-4 py-2">Code</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {category.services.map((service, serviceIndex) => (
                  <tr key={serviceIndex} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{service.name}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{service.code}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
};

export default ServicesAndFees;
