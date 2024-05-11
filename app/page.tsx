import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Service from "@/components/Service";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
   <Nav />
   <Hero />
   <Description />
   <Service flex="flex-row" phoneImg="phone1.png" />
   <Service flex="flex-row-reverse" phoneImg="phone2.png" />
   <Service flex="flex-row" phoneImg="phone3.png" />
   <Features />
   <Pricing />
   </>
   </>
  );
}
