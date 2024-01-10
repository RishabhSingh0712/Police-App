import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Header = () => {
  const links = [
    { name: 'My Post', link: '/' },
    { name: 'Membership', link: '/' },
    { name: 'About Us', link: '/' }, 
    { name: 'Contact Us', link: '/' },
    { name: 'Complaint', link: '/complaint' },
    {
      name: 'Service',
      link: '/',
      submenu: [
        { subName: 'Missing/Found', subLink: '/Missing_Found' },
        { subName: 'Phonebook', subLink: '/' },
        { subName: 'Find My Device', subLink: '/' },
        { subName: 'Nearest Police Station', subLink: '/' },
      ],
    },
  ];
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50 text-white'>
      <div className='md:flex items-center justify-between bg-gray-500 md:px-10 px-7 max-[700px]:py-4 '>
        {/* Logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <span>HOME</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={toggleMenu}
          className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 z-50 '
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-500 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-16 md:top-0' : '-top-96 md:top-0'
          }`}
        >
          {links.map((link, index) => (
            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold '>
              {link.submenu ? (
                <div className='relative'>
                  <span
                    className='text-white cursor-pointer hover:text-blue-400 duration-500'
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </span>
                  <ul className={`absolute bg-gray-500 top-full left-0 mt-1 pt-2 pb-3 px-4 z-10 ${open ? 'block' : 'hidden'}`}>
                    {link.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.subLink}
                          className='text-white hover:text-blue-400 duration-500 block py-1'
                          onClick={closeMenu}
                        >
                          {subItem.subName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={link.link}
                  className='text-white  hover:text-blue-400 duration-500'
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li className='md:ml-8 my-7 font-semibold'>
            <Link to='/loginpage'>
              <button className='btn bg-yellow-400 text-black md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
