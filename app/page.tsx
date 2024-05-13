import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Service from "@/components/Service";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Help from "@/components/Help";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
   <Nav />
   <Hero />
   <Description />
   <Service flex="flex-row" phoneImg='1' />
   <Service flex="flex-row-reverse" phoneImg='2' />
   <Service flex="flex-row" phoneImg='3' />
   <Features />
   <Pricing />
   <Help />
   <Contact />
   <Footer />
   </>
  );
}
