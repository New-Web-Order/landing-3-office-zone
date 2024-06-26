'use client';
import React from 'react';
import Button from '@/components/ui/button';
// import NextImage from 'next/image';
import HilightCard from '@/components/ui/hilight-card';
import Data from '@/dictionaries/en.json';

const Hilights = () => {
  return (
    <section className=' w-screen  flex flex-col items-center  py-10 lg:py-24 h-fit px-4 md:px-8 2xl:px-0' aria-label='lexible Work Environment' id='features'>
      <div className='max-w-screen-xl flex flex-col items-center  gap-y-16 '>
      <div className='w-full   flex flex-col items-center gap-6 lg:gap-6'>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl text-fg-text-contrast text-center'>{Data.hilights.mainHeading}</h1>
        <p className='font-normal lg:font-semibold text-base md:text-lg lg:text-xl text-fg-text text-center max-w-[25rem] lg:max-w-full'>{Data.hilights.mainText}</p>
      </div>
      <div className='w-full flex flex-wrap justify-center xl:justify-between gap-6 md:gap-12 items-center'>
        {Data.hilights.cardInfo.map((option, index) => (
          <HilightCard
            key={index}
            title={option.title}
            description={option.description}
            image={option.image}

          />
        ))}
      </div>
      <a
        href='/'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center'
      >
        <Button shape='filled' >
          {Data.hilights.buttonText}
        </Button>

      </a>
      </div>
    </section>
  );
};

export default Hilights;