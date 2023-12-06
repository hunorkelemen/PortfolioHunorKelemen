// Home.js
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const scrollToWorkSection = () => {
  const workSection = document.getElementById('workSection');

  if (workSection) {
    workSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#313336]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ffffff]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          Hunor Kelemen
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#c2c4cc]'>
          I'm learning Web Development technologies.
        </h2>
        <p className='text-[#c2c4cc] py-4 max-w-[700px]'>
          I am currently learning web development and actively seeking
          opportunities to apply my knowledge in real-world projects.
          Eager to gain hands-on experience and contribute to meaningful ventures.
        </p>
        <div>
          {/* "View Work" button */}
          <button
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#525050] hover:border-bg-[#ffffff]'
            onClick={scrollToWorkSection}
          >
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;




