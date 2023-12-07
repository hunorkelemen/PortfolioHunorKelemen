import React from 'react';
import tetkoImg from '../Assets/tetkoImg.png';
import Login from '../Assets/Login.png';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Work = () => {
  return (
    <div id='workSection' className='w-full md:h-screen text-gray-300 bg-[#313336]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          {/* Cím és alcím */}
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-white'>Work</p>
          <p className='py-6'>Check some of my works</p>
        </div>

        {/* Projects Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project Item */}
          <div
            style={{ backgroundImage: `url(${tetkoImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://hunorkelemen.github.io/WorkImg/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/hunorkelemen/WorkImg">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project Item */}
          <div
            style={{ backgroundImage: `url(${Login})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://hunorkelemen.github.io/Login.Register/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/hunorkelemen/Login.Register">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
