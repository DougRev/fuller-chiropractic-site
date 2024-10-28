import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper React components
import 'swiper/css'; // Correct Swiper CSS import
import 'swiper/css/navigation'; // Import specific CSS for Navigation
import 'swiper/css/pagination'; // Import specific CSS for Pagination

import { Navigation, Pagination, A11y } from 'swiper/modules'; // Updated module imports

// Sample testimonials
const testimonials = [
  {
    name: 'A.',
    text: 'Dr. Fuller and his staff are absolutely wonderful! The receptionist worked very hard with me to get my records from my old chiropractor and kept me updated during the entire process! One occasion we ran into traffic and were 30 minutes late for their last appointment slot of the day but they waited for us and didn’t make us feel like an inconvenience at all. Dr. Fuller is very knowledgeable and explains why he is doing certain things and asks if it works for you or if you want him to try a different technique. Overall great practice!',
    designation: 'Patient',
  },
  {
    name: 'J.',
    text: 'Not only did I have no more pain after my adjustment, but I felt great afterward. I definitely saw a huge difference. They made sure every single question I had was answered, and are always available if I think of any more questions I want answered. Their staff is the most friendly, welcoming staff I’ve ever dealt with. They are so warm and professional, and make the whole experience that much better. I was so impressed with the progress I was able to make after visiting them.',
    designation: 'Patient',
  },
  {
    name: 'J.',
    text: 'I have been seeing Dr. Garry Fuller over the span of 14 years. I highly recommend him to anyone who is looking for a chiropractor. He has always gone above and beyond what I would expect. He has helped me heal through many injuries and also assisting with pain caused from my pregnancies. The staff there has always been more than happy to work me in as I have crazy work schedules. I truly appreciate everything they have done for me.',
    designation: 'Patient',
  },
  {
    name: 'T.',
    text: 'I struggled 10 years with a lower back issue. I saw my medical doctor and a different chiropractor during that 10 years. And though I did get some relief from both, Dr. Fuller went directly to the problem and I feel a dramatic improvement in just 3 weeks. I highly recommend him.',
    designation: 'Patient',
  },
  {
    name: 'A.',
    text: 'I felt much better after my appointment. My pain was greatly reduced. They paid close attention to me and all of my questions were answered. Their staff is very friendly and professional. I was very satisfied with my visit. They were very helpful and I left feeling encouraged.',
    designation: 'Patient',
  },
  {
    name: 'A.',
    text: 'I continue to highly recommend Dr. Fuller and Fuller Chiropractic Clinic to many of my family and friends. Excellent and compassionate care!',
    designation: 'Patient',
  },
  {
    name: 'M.A.',
    text: 'I can’t say enough about how wonderful this man is, and his staff is awesome!',
    designation: 'Patient',
  },
  {
    name: 'T.',
    text: 'Need a Chiropractor? Go see Garry Fuller at Fuller Chiropractic Health and Wellness. Best Chiropractor Ever!!',
    designation: 'Patient',
  },
  {
    name: 'N.',
    text: 'Excellent care for many years from Dr. Fuller!',
    designation: 'Patient',
  },
  {
    name: 'B.',
    text: 'Dr Fuller is very kind and knowledgeable. He always knows right away what my problem is no matter how I describe it. I’ve been going to him for 20+ years and wouldn’t consider seeing anyone else.',
    designation: 'Patient',
  },
];

const TestimonialSlider = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handleReadMore = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          What Our Patients Say
        </h2>
        <p className="mt-4 text-lg leading-6 text-black">
          Hear from some of our patients who have experienced life-changing results.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="mt-10 max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          style={{ paddingBottom: '10px' }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 text-left min-h-[200px] flex flex-col justify-between mb-8 border border-accent">
                <p className="text-lg text-primary">
                  {truncateText(testimonial.text, 50)}
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-secondary">
                    {testimonial.designation}
                  </p>
                </div>
                {testimonial.text.length > 50 && (
                  <button
                    onClick={() => handleReadMore(testimonial)}
                    className="mt-4 text-secondary hover:text-blue-800"
                  >
                    Read More
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full border border-accent">
            <div className="text-right">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                Close
              </button>
            </div>
            <p className="text-lg text-primary mt-4">
              {selectedTestimonial?.text}
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-primary">
                {selectedTestimonial?.name}
              </p>
              <p className="text-sm text-secondary">
                {selectedTestimonial?.designation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;