import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import CustomSignUpButton from '../CustomSignUpButton';

const Hero: FunctionComponent = () => {
  return (
    <div className='relative z-50 py-8 sm:py-20 grid place-items-center grid-cols-1 text-center md:text-left md:grid-cols-2 gap-4'>
        <div className='order-last sm:order-first'>
            <h1 className='text-2xl sm:text-4xl font-bold text-dark'>
                Transform your YouTube channel to a 
                real App in a few seconds for free.
            </h1>
            <p className='my-4 text-gray'>
                Only with your channel link you can pick up your videos, 
                automatically, to create your website in minutes.
            </p>
            <CustomSignUpButton />
            <div className='p-0 md:px-4'>
                <h3 className='my-4 font-semibold text-dark'>Find us on:</h3>
                <ul className='flex justify-center md:justify-start items-center gap-4'>
                    <li className="text-dark text-md duration-150 hover:text-primaryBlue" title="Facebook">
                        <Link href=""><BsFacebook /></Link>
                    </li>
                    <li className="text-dark text-md duration-150 hover:text-primaryBlue" title="Twitter">
                        <Link href=""><BsTwitter /></Link>
                    </li>
                    <li className="text-dark text-md duration-150 hover:text-primaryBlue" title="Instagram">
                        <Link href=""><BsInstagram /></Link>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <img src="/hero-image.png" alt="Hero Image" width="100%" />
        </div>
    </div>
  )
}

export default Hero;