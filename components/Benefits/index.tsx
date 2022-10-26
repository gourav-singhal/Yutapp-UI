import React, { FunctionComponent } from 'react';

import { BsStopwatch, BsShieldCheck } from 'react-icons/bs';
import { IoMdPaper } from 'react-icons/io';
import { BiSupport } from 'react-icons/bi';

import solution from './data/data';
const benefitsTypesIconsNames = [
    "Stopwatch",
    "Paper",
    "Support",
    "Security"
];

const Benefits: FunctionComponent = () => {
  return (
    <div className='md:py-24 text-center'>
        <h2 className='text-3xl md:text-5xl font-bold text-dark max-w-2xl w-full m-auto'>
            The benefits of working with {" "}
            <span className='text-primaryBlue'>
                Yutapp
            </span>
        </h2>
        <div className='py-10 md:py-20 grid sm:gap-4 gap-8 place-items-center sm:place-items-start grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
            {
                solution.map((solution: any, index: number) =>
                    <div key={index} className='px-4 w-full'>
                        <h2 className='text-4xl text-primaryBlue'>
                            {
                                solution.icon_title == benefitsTypesIconsNames[0] ?
                                    <BsStopwatch /> :
                                solution.icon_title == benefitsTypesIconsNames[1] ?
                                    <IoMdPaper /> : 
                                solution.icon_title == benefitsTypesIconsNames[2] ?
                                    <BiSupport /> : 
                                solution.icon_title == benefitsTypesIconsNames[3] ?
                                    <BsShieldCheck /> : null
                            }
                        </h2>
                        <h3 className='text-left my-3 text-2xl font-bold text-dark '>
                            {solution.title}
                        </h3>
                        <p className='text-left text-sm text-gray leading-6'>
                            {solution.description}
                        </p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Benefits;