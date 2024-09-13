import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#1e1e42] py-10'>
      <div className='container mx-auto text-white px-4'>
        {/* Desktop Layout */}
        <div className='hidden md:flex flex-col md:flex-row justify-between'>
          <div className='mb-6 md:mb-0'>
            <h3 className='text-5xl font-bold pl-16 mb-4'>
              team<span className='text-blue-800'>.</span>
            </h3>
            <p className='text-white-400 pl-16 mb-4'>
              Collaboration platform for modern teams
            </p>
          </div>
          <div className='flex space-x-20'>
            <div>
              <h4 className='text-blue-400 mb-3'>Company</h4>
              <ul>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Product
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Blog
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-blue-400 mb-3'>Features</h4>
              <ul>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Screen Sharing
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    iOS & Android Apps
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    File Sharing
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    User Management
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-blue-400 mb-3'>Contact Us</h4>
              <ul>
                <li className='mb-4'>
                  <a href='mailto:info@teamapp.com' className='hover:underline'>
                    info@teamapp.com
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='tel:1-800-200-300' className='hover:underline'>
                    1-800-200-300
                  </a>
                </li>
                <li>
                  1010 Sunset Blvd.
                  <br />
                  Palo Alto, California
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-6 md:mt-0'>
            <h4 className='text-blue-400 mb-3'>Stay up to date</h4>
            <form className='flex flex-col md:flex-row'>
              <input
                type='email'
                placeholder='Email'
                className='mb-3 md:mb-0 md:mr-3 px-3 py-2 rounded bg-gray-700 text-white border-none'
              />
            </form>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className='md:hidden text-center'>
          <h3 className='text-4xl font-bold mb-4'>
            team<span className='text-blue-800'>.</span>
          </h3>
          <p className='text-gray-400 mb-4'>
            Collaboration platform for modern teams
          </p>

          <div className='flex flex-col items-center space-y-10'>
            <div className='text-center'>
              <h4 className='text-blue-400 mb-3'>Company</h4>
              <ul>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Product
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Blog
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className='text-center'>
              <h4 className='text-blue-400 mb-3'>Features</h4>
              <ul>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Screen Sharing
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    iOS & Android Apps
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    File Sharing
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    User Management
                  </a>
                </li>
              </ul>
            </div>
            <div className='text-center'>
              <h4 className='text-blue-400 mb-3'>Contact Us</h4>
              <ul>
                <li className='mb-4'>
                  <a href='mailto:info@teamapp.com' className='hover:underline'>
                    info@teamapp.com
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='tel:1-800-200-300' className='hover:underline'>
                    1-800-200-300
                  </a>
                </li>
                <li>
                  1010 Sunset Blvd.
                  <br />
                  Palo Alto, California
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-6'>
            <h4 className='text-blue-400 mb-3'>Stay up to date</h4>
            <form className='flex flex-col items-center'>
              <input
                type='email'
                placeholder='Email'
                className='mb-3 px-3 py-2 rounded bg-gray-700 text-white border-none'
              />
            </form>
          </div>
        </div>
      </div>

      <div className=' text-gray-500 mt-10 pl-72'>© Copyright Team Inc.</div>
    </footer>
  );
};

export default Footer;
