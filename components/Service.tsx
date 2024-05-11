import React from 'react';
import Image from 'next/image';

interface ServiceProps {
    flex: string;
    phoneImg: string;
}

const Service: React.FC<ServiceProps> = ({ flex, phoneImg }) => {
    return (
        <section className={`${flex} max-sm:flex-col-reverse flex mt-16 w-full px-10 justify-between mb-8`}>
            <div className='sm:w-[50%] '>
                <h2 className='sm:text-5xl text-4xl font-semibold mb-5 sm:leading-tight mt-5 sm:mt-0'><span className='text-buttonOrange'>Unleash</span> the power of AI with GenAI</h2>
                <p className='text-smallText leading-8'>
                    Stay ahead of the curve with our Dynamic Trend Analysis feature.
                    Unlock the full potential of your tech stack with Horizon&apos;s intuitive
                    and Stay ahead of the curve with our Dynamic Trend Analysis feature.
                    Unlock the full potential of your tech stack with Horizon&apos;s intuitive
                    and
                </p>
            </div>
            <Image
                src={phoneImg}
                width={300}
                height={300}
                alt="Picture of the author"
                className='sm:w-[40%]'
            />
        </section>
    );
};

export default Service;
