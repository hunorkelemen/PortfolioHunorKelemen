import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#313336] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/77bea144-2e85-4cc4-af88-0fa22b2a675a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - hunorkelemen52@gmail.com</p>
            </div>
            <input className='bg-[#ffffff] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ffffff] p-2' name="message" rows="8" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#525050] hover:border-[#ffffff] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact