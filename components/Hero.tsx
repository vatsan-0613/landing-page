import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
        <section className='lg:flex hidden px-10 mt-20'>
            <div className='relative'>
                <div className='mb-7 mt-5'>
                    <h2 className='text-buttonOrange text-6xl font-semibold mb-2'>Transform Ideas</h2>
                    <h2 className='text-6xl font-semibold'>into apps with AI</h2>
                </div>
                <div className='mb-7'>
                    <p className='text-smallText w-[55%]'>
                        Step into a new era of strategic decision-making. Horizon empowers businesses in the marketing space with unparalleled
                    </p>
                </div>
                <Button />
            </div>
            <div className='absolute right-0'>
            <Image
      src="/images/heroImg.png"
      width={500}
      height={500}
      alt="Picture of the author"
/>
            </div>
        </section>
        <section className='lg:hidden flex flex-col-reverse px-10 mt-20'>
        <div>
            <div className='mb-7 mt-5'>
                <h2 className='text-buttonOrange text-4xl font-semibold mb-2'>Transform Ideas</h2>
                <h2 className='text-4xl font-semibold'>into apps with AI</h2>
            </div>
            <div className='mb-7'>
                <p className='text-smallText'>
                    Step into a new era of strategic decision-making. Horizon empowers businesses in the marketing space with unparalleled
                </p>
            </div>
            <Button />
        </div>
        <div className=''>
        <Image
  src="/images/fullHeroImg.png"
  width={500}
  height={500}
  alt="Picture of the author"
/>
        </div>
    </section>
    </>
    )
}

export default Hero