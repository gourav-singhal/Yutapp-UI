import React from 'react';

import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { MdOutlineTune } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { TbHandClick } from 'react-icons/tb';

import CustomSignUpButton from '../CustomSignUpButton';

const TemplateBanner = () => {
  return (
    <div className='py-6 md:p-0'>
        <div className='text-center'>
            <h1 className='max-w-2xl w-full m-auto text-2xl md:text-4xl font-bold text-dark'>
                Why you need a website 
                as a video content creator
            </h1>
        </div>
        <div className='mt-8 grid place-items-center gap-4 grid-cols-1 md:grid-cols-2'>
            <div>
                <div className='my-8 flex justify-start items-center gap-4'>
                    <span className='text-3xl text-white bg-primaryBlue p-4 rounded'>
                        <HiOutlineSpeakerphone />
                    </span>
                    <h2 className='text-left text-md font-normal text-black'>
                        Build a brand off of YouTube.
                    </h2>
                </div>
                <div className='my-8 flex justify-start items-center gap-4'>
                    <span className='text-3xl text-white bg-primaryBlue p-4 rounded'>
                        <MdOutlineTune />
                    </span>
                    <h2 className='text-left text-md font-normal text-black'>
                        Control and allows you to show 
                        additional content to your viewers.
                    </h2>
                </div>
                <div className='my-8 flex justify-start items-center gap-4'>
                    <span className='text-3xl text-white bg-primaryBlue p-4 rounded'>
                        <AiOutlineLink />
                    </span>
                    <h2 className='text-left text-md font-normal text-black'>
                        Keep your visitors watching your content instead 
                        clicking on a related video link which takes them 
                        away from your content in YouTube.
                    </h2>
                </div>
                <div className='my-8 flex justify-start items-center gap-4'>
                    <span className='text-3xl text-white bg-primaryBlue p-4 rounded'>
                        <TbHandClick />
                    </span>
                    <h2 className='text-left text-md font-normal text-black'>
                        Provide aother products and services 
                        to your personel website.
                    </h2>
                </div>
                <div className='text-center md:text-left'>
                    <CustomSignUpButton />
                </div>
            </div>

            <div className='order-first md:order-last'>
                <img src="/template-screenshot.png" alt="Template Screenshot" />
            </div>
        </div>
    </div>
  )
}

export default TemplateBanner;