import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const CustomSignUpButton: FunctionComponent = () => {
  return (
    <Link href="">
        <button 
            title="Sign Up For Free Now"
            className='relative z-50 bg-primaryBlue text-sm py-2 px-4 sm:px-6 sm:py-3 rounded-full font-bold text-white sm:text-white border sm:border-white duration-150 hover:bg-white hover:text-primaryBlue'
            style={{
                borderTopRightRadius: "5px"
            }}>
            Sign Up For Free Now
        </button>
    </Link>
  )
}

export default CustomSignUpButton;