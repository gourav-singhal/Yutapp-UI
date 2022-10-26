import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import CustomSignUpButton from '../CustomSignUpButton';

const Header: FunctionComponent = () => {
  return (
    <header className='p-0 md:pt-3 flex justify-between items-center gap-4'>
        <div>
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
            <CustomSignUpButton />
        </div>
        <div className='circle fixed sm:-top-80 sm:-right-24 sm:p-72 hidden sm:block bg-primaryBlue rounded-full'
        style={{
            background: "linear-gradient(to bottom, #199ef3, #199ef3)"
        }}>
        </div>
    </header>
  )
}

export default Header;