import React, { FunctionComponent } from 'react';

import CustomSignUpButton from '../CustomSignUpButton';

const CreateBrandBanner: FunctionComponent = () => {
  return (
    <div className='py-16 md:py-32 text-center'>
        <h1 className='max-w-3xl w-full m-auto text-3xl text-dark md:text-5xl font-bold'>
            It`s time Yutapp your way, 
            and <span className='text-primaryBlue'>Create your Brand!</span>
        </h1>
        <p className='max-w-xl w-full mx-auto my-6 text-gray'>
            Only with your channel link you can 
            pick up your videos, automatically, to create 
            your website in minutes.
        </p>
        <CustomSignUpButton />
    </div>
  )
}

export default CreateBrandBanner;