import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Help = () => {
    return (
        <section className='w-full bg-gray-100 py-10 text-center px-10'>
            <h1 className='text-4xl font-semibold mb-4'>Need Help?</h1>
            <p className='text-smallText'>Don&apos;t worry, we got you. Here are some answers for your questions.</p>
            <div className='sm:w-[50%] mx-auto mt-10'>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className='bg-white rounded-md px-4 mb-4 py-0'>
                    <AccordionTrigger className='hover:no-underline text-xl border-b-[1px] border-solid border-gray-150'>What is GenAI?</AccordionTrigger>
                    <AccordionContent className='text-start mt-3 text-smallText tracking-wide text-sm'>
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-white rounded-md px-4 mb-4 py-0'>
                    <AccordionTrigger className='hover:no-underline text-xl border-b-[1px] border-solid border-gray-150'>What is GenAI?</AccordionTrigger>
                    <AccordionContent className='text-start mt-3 text-smallText tracking-wide text-sm'>
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-white rounded-md px-4 mb-4 py-0'>
                    <AccordionTrigger className='hover:no-underline text-xl border-b-[1px] border-solid border-gray-150'>What is GenAI?</AccordionTrigger>
                    <AccordionContent className='text-start mt-3 text-smallText tracking-wide text-sm'>
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className='bg-white rounded-md px-4 mb-4 py-0'>
                    <AccordionTrigger className='hover:no-underline text-xl border-b-[1px] border-solid border-gray-150'>What is GenAI?</AccordionTrigger>
                    <AccordionContent className='text-start mt-3 text-smallText tracking-wide text-sm'>
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className='bg-white rounded-md px-4 mb-4 py-0'>
                    <AccordionTrigger className='hover:no-underline text-xl border-b-[1px] border-solid border-gray-150'>What is GenAI?</AccordionTrigger>
                    <AccordionContent className='text-start mt-3 text-smallText tracking-wide text-sm'>
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className='bg-white rounded-md px-4 '>
                    <AccordionTrigger className='hover:no-underline text-xl border-b-[1px] border-solid border-gray-150'>What is GenAI?</AccordionTrigger>
                    <AccordionContent className='text-start mt-3 text-smallText tracking-wide text-sm'>
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </section>
    )
}

export default Help