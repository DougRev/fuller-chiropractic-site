import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'New Patients', href: '/new-patients', current: false },
  { name: 'Meet the Doctor', href: '/meet-the-doctor', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },

];

const services = [
  { name: 'Chiropractic Care', href: '/services/chiropractic-care' },
  { name: 'Laser Therapy', href: '/services/laser-therapy' },
  { name: 'EMS', href: '/services/ems' },
  { name: 'Detox Footbath', href: '/services/detox-footbath' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  const [logoUrl, setLogoUrl] = useState('');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const storage = getStorage();
        const logoRef = ref(storage, 'images/fuller-chiro-logo-transparent-bg.png');
        const url = await getDownloadURL(logoRef);
        setLogoUrl(url);
      } catch (error) {
        console.error('Error fetching logo image:', error);
      }
    };
    fetchLogo();
  }, []);

  const handleServicesClick = () => {
    setShowServicesDropdown((prev) => !prev);
  };

  const handleLinkClick = () => {
    setShowServicesDropdown(false);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-lg fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:justify-start">
                <div className="flex-shrink-0">
                  <Link to="/" className="flex items-center">
                    {logoUrl && (
                      <img
                        src={logoUrl}
                        alt="Fuller Chiropractic Logo"
                        className="h-10 w-auto mr-3"
                      />
                    )}
                    <span className="text-2xl font-bold text-blue-600">Fuller Chiropractic</span>
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={handleLinkClick}
                        className={classNames(
                          item.current ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-200 hover:text-blue-600',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}

                    {/* Services Dropdown */}
                    <div className="relative">
                      <button
                        onClick={handleServicesClick}
                        className="text-gray-800 hover:bg-gray-200 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Services
                      </button>
                      {showServicesDropdown && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                onClick={handleLinkClick}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-blue-600"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-200 hover:text-blue-600',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {/* Services section for mobile view */}
              <Disclosure.Button
                as="div"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800"
              >
                Services
              </Disclosure.Button>
              {services.map((service) => (
                <Disclosure.Button
                  key={service.name}
                  as={Link}
                  to={service.href}
                  className="block rounded-md pl-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:text-blue-600"
                >
                  {service.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
