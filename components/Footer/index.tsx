import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const Footer: FunctionComponent = () => {
  return (
    <footer className='grid place-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='z-10 bg-white  w-full flex justify-center items-center'>
          <Link href="" legacyBehavior>
            <a title="Yutapp your way and create your brand">
              <img 
              src="/header-logo.png" 
              alt="Header Logo" 
              className='relative z-50 w-full' 
              style={{
                maxWidth: "120px",
                width: "100%"
              }}
              />
            </a>
          </Link>
        </div>

        <div>
          <ul className='flex justify-center items-center gap-4'>
            <li className='text-gray text-sm duration-150 hover:text-primaryBlue' title="About Us">
              <Link href="">About Us</Link>
            </li>
            <li className='text-gray text-sm duration-150 hover:text-primaryBlue' title="Privacy Policy">
              <Link href="">Privacy Policy</Link>
            </li>
            <li className='text-gray text-sm duration-150 hover:text-primaryBlue' title="Terms & Conditions">
              <Link href="">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="w-full flex justify-center md:justify-center lg:justify-end items-center">
          <h5 className='text-sm text-darkblue'>
            &copy; 2022 Copyright {" "}
            <span className='font-semibold text-primaryBlue'>Yutapp</span> {" "}
            .All rights reserved.
          </h5>
        </div>
    </footer>
  )
}

export default Footer;