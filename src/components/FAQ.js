import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; // Importing icons

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What should I bring to my first appointment?',
      answer:
        'Please bring a valid ID, your insurance card (if applicable), and any relevant medical records or imaging results that might help us understand your condition better.',
    },
    {
      question: 'How long does an appointment usually take?',
      answer:
        'Initial consultations typically take about 45 minutes, while follow-up appointments usually last 20-30 minutes depending on the treatment plan.',
    },
    {
      question: 'Do I need a referral to see Dr. Fuller?',
      answer:
        'No, you do not need a referral to see Dr. Fuller. You can book an appointment directly without prior authorization from another healthcare provider.',
    },
    {
      question: 'What conditions do you treat?',
      answer:
        'We treat a wide range of musculoskeletal conditions including back pain, neck pain, headaches, sports injuries, and more.',
    },
    {
      question: 'Is chiropractic care safe?',
      answer:
        'Yes, chiropractic care is generally safe when performed by a trained and licensed chiropractor. Dr. Fuller uses proven techniques to ensure your safety and comfort.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
          >
            <div className="flex justify-between items-center">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-lg md:text-xl font-semibold text-left text-gray-900 w-full focus:outline-none"
              >
                {faq.question}
              </button>
              <button
                onClick={() => toggleFAQ(index)}
                className="text-gray-500 focus:outline-none"
                aria-label={openIndex === index ? 'Collapse FAQ' : 'Expand FAQ'}
              >
                {openIndex === index ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
            </div>
            {openIndex === index && (
              <div className="mt-4 text-gray-700 text-base md:text-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
