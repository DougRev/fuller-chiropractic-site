import { Link } from 'react-router-dom';

const scrollToServices = () => {
  const servicesSection = document.getElementById('services-section');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

function CustomHeroSection({ heroImageUrl }) {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat">
      <img
        src={heroImageUrl}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center text-white">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl relative">
              <span className="text-background">Chiropractic Care</span>
              <span className="absolute inset-0 text-white stroke-2 stroke-white">Chiropractic Care</span>
            </h1>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Tailored to Your Needs
            </h1>
            <p className="mt-6 text-lg leading-8">
              Personalized chiropractic treatments to help you live pain-free and optimize your health.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact-us"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Us Today
              </Link>
              <button onClick={scrollToServices} className="text-sm font-semibold leading-6">
                Learn More <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomHeroSection;
