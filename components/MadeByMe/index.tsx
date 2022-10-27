import React, { FunctionComponent } from 'react';

const MadeByMe: FunctionComponent = () => {
  return (
    <div className="bg-darkblue rounded-xl mt-10 md:mt-10 p-4 md:mb-6">
        <h5 className="text-center text-white text-xs md:text-sm text-center leading-5 md:leading-6">
            &copy; 2022 - Made with ❤️ by {" "}
            <a href="https://twitter.com/boularbahsmail" target="_blank" rel="noreferrer" 
                className="font-semibold text-secondaryBlue" title="Twitter">
                Ismailium
            </a> {" "}
            using {" "}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer" 
                className="font-semibold text-secondaryBlue" title="Next.js">
                Next.js
            </a> {" "}
            & {" "}
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" 
                className="font-semibold text-secondaryBlue" title="Tailwind CSS">
                Tailwind CSS
            </a>. {" "}
            Deployed on {" "}
            <a href="https://vercel.com/" target="_blank" rel="noreferrer" 
                className="font-semibold text-secondaryBlue" title="Vercel">
                Vercel
            </a>, {" "}
            Open Sourced on {" "}
            <a href="https://github.com/boularbahsmail/Yutapp-UI" 
                target="_blank" rel="noreferrer" 
                className="font-semibold text-secondaryBlue" title="GitHub Repository">
                Github
            </a>
        </h5>
    </div>
  )
}

export default MadeByMe;