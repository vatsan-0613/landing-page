import React from 'react'
import Image from 'next/image'
import Button from './Button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Nav = () => {
  return (
    <>
    <nav className='sm:flex hidden w-full justify-between px-10 py-4'>
        <Image
      src="/images/genai.svg"
      width={130}
      height={30}
      alt="Picture of the author"
/> 
        <div className='flex gap-5 items-center text-gray-500'>
            <p>Features</p>
            <p>Product</p>
            <p>Testimonial</p>
            <p>FAQ</p>
        </div>
        <div>
            <Button />
        </div>
    </nav>
    <nav className='sm:hidden w-full flex justify-between px-4 py-4'>

        <Image
      src="/images/genai.svg"
      width={130}
      height={30}
      alt="Picture of the author"
/> 
<Sheet>
  <SheetTrigger><Image
      src="/images/menu.png"
      width={30}
      height={30}
      alt="Picture of the author"
/></SheetTrigger>
  <SheetContent className="w-[200px]">
    <SheetHeader>
      {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
      <SheetDescription>
        <div className='flex gap-5 items-center flex-col text-gray-500 mt-5'>
            <div>Features</div>
            <div>Product</div>
            <div>Testimonial</div>
            <div>FAQ</div>
            <Button />
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </nav>
    </>
    
  )
}

export default Nav