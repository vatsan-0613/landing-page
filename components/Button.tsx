import React from 'react'
import Image from 'next/image'

const Button = () => {
  return (
    <button className='bg-buttonOrange px-4 py-3 rounded-md text-white flex items-center gap-2'>
        <p>Get Started</p>
        <Image
      src="/images/arrow.png"
      width={20}
      height={20}
      alt="Picture of the author"
/>
    </button>
  )
}

export default Button