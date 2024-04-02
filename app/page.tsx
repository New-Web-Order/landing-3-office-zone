import React from "react";
import WelcomeBanner from '@/components/sections/welcome-banner';
import Hilights from "@/components/sections/hilights";
import Instructions from "@/components/sections/instructor";
import CardGrid from "@/components/sections/cards-grid";
import Cta from "@/components/sections/cta";
// import Testimonials from '@/components/sections/testimonials';
// import FAQS from '@/components/sections/faqs';
// import CTA from '@/components/sections/cta';

const Homepage = () => {
  return (
    <main className="flex flex-col w-screen items-center p-0 m-0">
       <WelcomeBanner/>
      <Hilights/>
      <Instructions/>
      <CardGrid/>
      <Cta/> 
    </main>
  );
}
export default Homepage;
