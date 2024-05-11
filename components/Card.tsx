import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className='mb-10 p-4 border-solid border-[1px] border-gray-150 rounded-lg shadow-md'>
        <div className='bg-orange-200 rounded-md inline-block p-3 mb-5'>
            <Image src="/images/Group.png" width={30} height={30} alt='quality-image'/>
        </div>
        <h3 className='font-semibold text-2xl mb-2'>Quality apps</h3>
        <p className='text-smallText text-sm'>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</p>
    </div>
  )
}

export default Card