import React from 'react';
import WelcomeBanner from '@/components/sections/welcome-banner';
import Hilights from '@/components/sections/features';
import Instructions from '@/components/sections/about';
import CardGrid from '@/components/sections/team';
import Cta from '@/components/sections/cta';

const Homepage = () => {
  return (
    <main className='flex flex-col w-screen items-center'>
      <WelcomeBanner />
      <Hilights />
      <Instructions />
      <CardGrid />
      <Cta />
    </main>
  );
};
export default Homepage;
