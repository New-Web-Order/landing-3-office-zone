"use client";
import React from 'react';
import Button from '@/components/ui/button';
import Data from '@/dictionaries/en.json';



const Cta = () => {
  return (
    <section className='w-screen h-[70vh] bg-cover bg-center flex items-center px-4 md:px-8 2xl:px-0'
      style={{ backgroundImage: `url("/assets/images/end-section-banner.webp")` }}

    >
      <div className='flex flex-col w-full items-center gap-7 lg:gap-9'>
        <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-bg-1200 text-center max-w-[17rem] sm:max-w-full'>{Data.cta.mainHeading} <br /> <span className='text-3xl md:text-4xl lg:text-6xl font-bold text-bg-1200 text-center'>co-working spaces today!</span></h1>
        <a
          href='/'
          target="_blank"
          rel="noopener noreferrer"
          className="flex lg:h-14"
        >
          <Button shape="cta" >
            {Data.cta.buttonText}
          </Button>

        </a>
      </div>
    </section>
  )
}

export default Cta