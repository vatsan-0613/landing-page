import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <footer className='bg-black px-[8%] py-8'>
        <div className='flex justify-between sm:items-center sm:flex-row flex-col sm:gap-0 gap-5 items-start'>
          <h3 className='text-white text-2xl font-medium'>
          Get your AI apps built with blazing speed.
          </h3>
          <div className='flex items-center'>
            <Button />
          </div>
        </div>
        <hr className='border-solid border-t-1 border-white my-10 rounded-md'/>
        <div className='text-white flex justify-between sm:items-center sm:flex-row flex-col gap-10 sm:gap-0'>
          <div className='sm:w-[30%] flex flex-col gap-5'>
            <h2 className='font-semibold text-2xl'>GenAI</h2>
            <p>lorem ipsum dolor sit amet lorem ipsum dolor sit maet lorem ipsum dlor sit amet.</p>
            <p className='hidden sm:inline-block'>All rights reserved.</p>
          </div>
          <div className='flex justify-between sm:gap-20'>
            <div className='flex flex-col gap-3 text-sm text-gray-500'>
              <p>About</p>
              <p>Contact</p>
              <p>Blog</p>
              <p>Story</p>
            </div>
            <div className='flex flex-col gap-3 text-sm text-gray-500'>
              <p>Company</p>
              <p>Product</p>
              <p>Press</p>
              <p>More</p>
            </div>
            <div className='flex flex-col gap-3 text-sm text-gray-500'>
              <p>Press</p>
              <p>Career</p>
              <p>News Letters</p>
              <p>More</p>
            </div>
          </div>
          <p className='sm:hidden text-center'>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer