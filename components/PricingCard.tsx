import React from 'react';
import Image from 'next/image';
import PricingButton from './PricingButton';

interface PricingCardProps {
  type: string; // Define the type for the 'type' prop
  price:string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ type, price, features }) => {
  return (
    <div className={`p-10 mb-7 border-solid border-[1px] border-gray-150 rounded-lg shadow-md ${type!=="Innovator" && "h-fit"} ${type=="Innovator" && "shadow-xl"}`}>
      <p className={`font-semibold text-center ${type=="Innovator" && "text-buttonOrange"} `}>{type} {type=="Innovator" && (
        <span className='bg-orange-50 text-buttonOrange rounded-md px-2 py-1'>
            <span className='w-2 h-2 inline-block bg-buttonOrange rounded-full me-2'></span>
            <span className= 'text-xs font-normal'>
                BEST VALUE
            </span>
        </span>
      )}</p>
      <p className='font-semibold text-center text-4xl mb-6'>${price}<span className='text-gray-300'>/mo</span></p>
      {features.map((feature, ind) => {
        return(
            <div className='flex gap-3 mb-4 items-center' key={ind}>
                <Image src="/images/orange-arrow.png" width={20} height={20} alt='list-arrow'/>
                <p className={`text-sm font-medium`}>{feature}</p>
            </div>
        )
      })}
      {type==="Innovator"?<PricingButton text='Get now' buttonBackgroundColor='buttonOrange' textColor='white'/>:<PricingButton text="Get now" buttonBackgroundColor='white' textColor='black'/>}
      
    </div>
  );
};

export default PricingCard;
