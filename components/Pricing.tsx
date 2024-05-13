import React from 'react'
import PricingCard from './PricingCard'
import Image from 'next/image'

const Pricing = () => {
    const pricings = [
        {
          type : "Explorer", 
          price : "4,99", 
          features : [
            "Market Trend Analysis",
            "Limited Query Mapping",
            "Standard Dashboards",
            "Email Notifications",
            "Entry-Level Support"
          ]
        },
        {
          type : "Innovator", 
          price : "19,99", 
          features : [
            "Everything in Explorer, plus:",
            "Predictive Analytics",
            "Advanced Query Mapping",
            "Customizable Dashboards",
            "Smart Alert System",
            "Extended Support"
          ]
        },
        {
          type : "Visionary", 
          price : "49,99", 
          features : [
            "Everything in Innovator, plus",
            "Competitor Benchmarking",
            "Holistic Market Visualization",
            "Adaptive Strategy Planner",
            "24/7 Priority Support",
            "Custom Integrations"
          ]
        }
      ]

  return (
        <section className='px-10 w-full mt-16 mb-16'>
        <h2 className='sm:text-5xl text-4xl font-semibold text-center mb-10 sm:leading-tight'>Start making <span className='text-buttonOrange'>smarter</span> decisions, <br />Choose a plan</h2>
        <div className='sm:flex-row flex justify-evenly flex-col items-center'>
        {pricings.map((pricing, ind) => {
            return(
            <PricingCard type={pricing.type} price={pricing.price} features={pricing.features} key={ind}/>
            )
        })}
        </div>
        <div className='sm:flex-row flex-col flex sm:justify-evenly sm:items-center items-start'>
            <div className='flex gap-3 items-center mb-3 sm:mb-0 sm:mx-auto ms-16'>
                <Image src="/images/tick.png" width={30} height={30} alt='tick-img'/>
                <p className='text-buttonOrange'>Free trial</p>
            </div>
            <div className='flex gap-3 items-center mb-3 sm:mb-0 sm:mx-auto ms-16'>
                <Image src="/images/tick.png" width={30} height={30} alt='tick-img'/>
                <p className='text-buttonOrange'>Cancel anytime</p>
            </div>
            <div className='flex gap-3 items-center mb-3 sm:mb-0 sm:mx-auto ms-16'>
                <Image src="/images/tick.png" width={30} height={30} alt='tick-img'/>
                <p className='text-buttonOrange'>support included</p>
            </div>
        </div>
    </section>
  )
}

export default Pricing