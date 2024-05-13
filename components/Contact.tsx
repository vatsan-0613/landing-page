import React from 'react'
import PricingButton from './PricingButton'

const Contact = () => {
  return (
    <section className='mt-16 px-10 mb-16 flex flex-col gap-5'>
        <h1 className='text-4xl font-semibold text-center mb-5'>Detect your next <span className='text-buttonOrange'>big move</span></h1>
        <p className='text-smallText text-center font-medium mb-5 sm:w-[50%] sm:mx-auto'>Experience the synergy of your favorite tools working seamlessly together, all powered by Horizon&apos;s cutting-edge AI analytics.</p>
        <div className='flex sm:flex-row flex-col gap-3 justify-center items-center'>
            <div className='bg-gray-300 rounded-md px-3 py-3 sm:w-[30%] w-[100%] text-gray-400'>
                yourmail@gmail.com
            </div>
            <div className='ms-auto sm:ms-0'>
                <PricingButton text="Subscribe now" buttonBackgroundColor='buttonOrange' textColor='white' />
            </div>
        </div>
    </section>
  )
}

export default Contact