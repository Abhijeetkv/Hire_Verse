import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {

  return (
      <nav
        className=" fixed z-20 w-full border-b backdrop-blur-3xl"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">

            {/* Logo + Mobile Toggle */}
            <div className="flex w-full items-center justify-between gap-12">
              <Link>
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </Link>
              <div className='border p-2 px-4 lg:px-7 rounded-full  '>
                 <button >Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;