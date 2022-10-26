import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const CustomSignUpButton: FunctionComponent = () => {
  return (
    <Link href="">
        <button 
            title="Sign Up For Free Now"
            className='relative z-50 bg-primaryBlue text-sm py-2 px-4 sm:px-6 sm:py-3 rounded-full font-bold text-white sm:text-white border border-primaryBlue duration-150 hover:bg-darkblue hover:border-darkblue'
            style={{
                borderTopRightRadius: "5px"
            }}>
            <span>Sign Up For Free Now</span>
        </button>
    </Link>
  )
}

export default CustomSignUpButton;