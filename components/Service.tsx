import React from 'react';
import Image from 'next/image';
import phoneOne from '@/public/images/Phone1.png';
import phoneTwo from '@/public/images/Phone2.png';
import phoneThree from '@/public/images/Phone3.png';

interface ServiceProps {
    flex: string;
    phoneImg: string;
}

const Service: React.FC<ServiceProps> = ({ flex, phoneImg }) => {
    return (
        <section className={`${flex} max-sm:flex-col-reverse items-center flex mt-16 w-full px-10 justify-between mb-16`}>
            <div className='sm:w-[50%] text-center'>
                <h2 className='sm:text-5xl text-3xl font-semibold mb-5 sm:leading-tight mt-5 sm:mt-0 text-center sm:text-start'><span className='text-buttonOrange'>Unleash</span> the power of AI with GenAI</h2>
                <p className='text-smallText sm-leading-8 leading-6 sm:text-lg text-sm text-center sm:text-start'>
                    Stay ahead of the curve with our Dynamic Trend Analysis feature.
                    Unlock the full potential of your tech stack with Horizon&apos;s intuitive
                    and Stay ahead of the curve with our Dynamic Trend Analysis feature.
                    Unlock the full potential of your tech stack with Horizon&apos;s intuitive
                    and
                </p>
            </div>
            <Image
                src={phoneImg === "1" ? phoneOne : phoneImg === "2" ? phoneTwo : phoneImg === "3" ? phoneThree : phoneThree}
                width={300}
                height={300}
                alt="Picture of the author"
                className='sm:w-[40%]'
            />
        </section>
    );
};

export default Service;
