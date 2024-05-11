import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Service from "@/components/Service";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Help from "@/components/Help";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
   <Nav />
   <Hero />
   <Description />
   <Service flex="flex-row" phoneImg='/images/phone1.png' />
   <Service flex="flex-row-reverse" phoneImg='/images/phone2.png' />
   <Service flex="flex-row" phoneImg='/images/phone3.png' />
   <Features />
   <Pricing />
   <Help />
   <Contact />
   </>
  );
}
