import React from 'react'
import Card from './Card'

const Features = () => {
  return (
    <section className='px-10 w-full mt-16'>
        <h2 className='sm:text-5xl text-4xl font-semibold sm:w-[60%] w-100% mx-auto text-center mb-10 sm:leading-tight'><span className='text-buttonOrange'>Essentially</span>, everything you need to ship you first AI App</h2>
        <div className='grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-4 gap-x-8'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </section>
  )
}

export default Features