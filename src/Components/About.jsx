import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#313336] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-white'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Hunor Kelemen, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Web development is my passion, and I thrive on the thrill of facing new challenges. Every project is a canvas where I paint my passion for creating delightful online experiences. Day by day, I'm on a laid-back journey of constant growth and improvement in the world of web development.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;