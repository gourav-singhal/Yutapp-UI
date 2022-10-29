import React, { FunctionComponent, useState } from 'react';

import { IoMdClose } from 'react-icons/io';

const CreateBrandBanner: FunctionComponent = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setModalOpen(!isModalOpen);
  }

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setModalOpen(!isModalOpen);
  }

  return (
    <div className='py-16 md:py-32 text-center' id="SignUp">
      <div className={`hidden modal-container p-4 z-50 fixed flex justify-center items-center left-0 top-0 bottom-0 right-0 min-h-screen w-full m-0 ${isModalOpen ? "showModal" : ""}`}>
        <div className='modal-wrapper relative text-left bg-white p-4 md:p-6 max-w-3xl rounded-md h-full w-full m-auto'>
          <button 
            onClick={closeModal}
            title="Close" className='absolute right-2 top-2 p-2 rounded-md bg-primaryBlue text-white text-xl font-bold active:scale-95'>
            <IoMdClose />
          </button>
          <div>
            <h2 className='pr-20 md:p-0 text-xl max-w-md w-full md:text-3xl font-bold text-dark'>
              Sign up to create your website easily
            </h2>
          </div>

          <form className='mt-6' action='' onSubmit={(e) => {e.preventDefault()}}>
            <div className='py-2 flex flex-col gap-2'>
              <label className='text-sm md:text-md font-bold'>Full Name</label>
              <input className='border border-gray2 rounded-md p-2 text-sm md:text-md md:p-3 outline-none duration-150 focus:border-primaryBlue' type="text" placeholder='Ismail Boularbah' />
            </div>

            <div className='py-2 flex flex-col gap-2'>
              <label className='text-sm md:text-md font-bold'>Email Address</label>
              <input className='border border-gray2 rounded-md p-2 text-sm md:text-md md:p-3 outline-none duration-150 focus:border-primaryBlue' type="text" placeholder='boulrbahismail01@gmail.com' />
            </div>

            <div className='py-2 flex flex-col gap-2'>
              <label className='text-sm md:text-md font-bold'>Youtube Channel URL</label>
              <input className='border border-gray2 rounded-md p-2 text-sm md:text-md md:p-3 outline-none duration-150 focus:border-primaryBlue' type="text" placeholder='https://www.youtube.com/c/YourName' />
            </div>

            <div className='mt-4 flex justify-start items-center gap-3'>
              <button 
                title="Submit"
                className='py-2 px-4 bg-primaryBlue text-white font-bold rounded-full hover:bg-darkblue active:scale-95'
                style={{
                  borderTopRightRadius: "5px"
                }}>
                Submit
              </button>
              <button 
                onClick={closeModal}
                title="Cancel"
                className='py-2 px-4 bg-gray2 text-darkblue font-bold rounded-full active:scale-95'
                style={{
                  borderTopRightRadius: "5px"
                }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <h1 className='max-w-3xl w-full m-auto text-3xl text-dark md:text-5xl font-bold'>
          It`s time Yutapp your way, 
          and <span className='text-primaryBlue'>Create your Brand!</span>
      </h1>
      <p className='max-w-xl w-full mx-auto my-6 text-gray'>
          Only with your channel link you can 
          pick up your videos, automatically, to create 
          your website in minutes.
      </p>
      <button 
            onClick={openModal}
            title="Sign Up For Free Now"
            className='relative z-20 bg-primaryBlue text-sm py-2 px-4 sm:px-6 sm:py-3 rounded-full font-bold text-white sm:text-white border border-primaryBlue duration-150 hover:bg-darkblue hover:border-darkblue'
            style={{
                borderTopRightRadius: "5px"
            }}>
            <span>Sign Up For Free Now</span>
        </button>
    </div>
  )
}

export default CreateBrandBanner;
