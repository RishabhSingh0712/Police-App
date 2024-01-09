import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Header = () => {
  let Links = [
    { name: 'My Post', link: '/' },
    { name: 'Membership', link: '/' },
    { name: 'About Us', link: '/' },
    { name: 'Contact Us', link: '/' },
    { name: 'Complaint', link: '/complaint' },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50 text-white'>
      <div className='md:flex items-center justify-between bg-gray-500 md:px-10 px-7 max-[700px]:py-4 '>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <span>HOME</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 z-50 '
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-500 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-16 md:top-0' : '-top-96 md:top-0'
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <Link
                to={link.link}
                className='text-white  hover:text-blue-400 duration-500'
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className='md:ml-8 my-7 font-semibold'>
               <Link to = '/loginpage'>
                <button className='btn bg-yellow-400 text-black md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Login</button>
                </Link>
          </li>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
