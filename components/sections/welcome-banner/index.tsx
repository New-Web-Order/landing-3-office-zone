'use client';
import React from 'react';
import NextImage from 'next/image';
import Arrow from '@/public/assets/icons/arrow.svg';
import Button from '@/components/ui/button';
import Data from '@/dictionaries/en.json';

const WelcomeBanner = () => {
  return (
    <section className='w-screen h-screen flex items-center justify-center px-4 md:px-8 2xl:px-0 saturate-25 before:block before:absolute before:-inset-1 before:bg-black before:bg-opacity-60'
    style={{
        backgroundImage: `url('/assets/images/welcome-banner.webp')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        maxWidth:'100vw'
    }}  
>
    <div className='w-full max-w-screen-xl flex flex-col items-center gap-9 z-10'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold lg:font-semibold text-2xl md:text-4xl lg:text-6xl max-w-[33.063rem] text-bg-1200 text-center '>{Data.welcomeBanner.mainHeading}</h1>
            <p className='font-normal md:font-medium text-sm md:text-lg lg:text-2xl text-bg-900 text-center '>{Data.welcomeBanner.mainText}</p>
        </div>
        <div className='w-full rounded-xl md:rounded-full bg-1200 px-3 py-3 md:pr-8 md:pl-10 md:py-4 2xl:py-6 2xl:px-16 flex justify-between items-center bg-bg-1200 shadow-2xl'>
          <div className='w-fit flex items-center justify-center'>
            <div className='w-fit pr-3 lg:pr-11 flex items-center justify-center gap-1.5 lg:gap-3.5 cursor-pointer border-r-2 border-bg-800 text-bg-100 hover:text-gray-600'>
              <p className='text-xs md:font-medium font-normal md:text-[15px] lg:text-lg 2xl:text-xl lg:font-semibold  '>{Data.welcomeBanner['chevron-one']}</p>
              <NextImage 
              src={Arrow}
              alt='chevron'
              className='lg:h-2 lg:w-3 h-1 w-1.5 '
              />
            </div>
            <div className='w-fit px-3 lg:px-11 flex items-center justify-center gap-1.5 lg:gap-3.5 cursor-pointer border-r-2 border-bg-800 text-bg-100 hover:text-gray-600'>
              <p className='text-xs md:font-medium font-normal md:text-[15px] lg:text-lg 2xl:text-xl lg:font-semibold  '>{Data.welcomeBanner['chevron-two']}</p>
              <NextImage 
              src={Arrow}
              alt='chevron'
              className='lg:h-2 lg:w-3 h-1 w-1.5 '
              />
            </div>
            <div className='w-fit px-3 lg:px-11 flex items-center justify-center gap-1.5 lg:gap-3.5 cursor-pointer text-bg-100 hover:text-gray-600'>
              <p className='text-xs md:font-medium font-normal md:text-[15px] lg:text-lg 2xl:text-xl lg:font-semibold  '>{Data.welcomeBanner['chevron-three']}</p>
              <NextImage 
              src={Arrow}
              alt='chevron'
              className='lg:h-2 lg:w-3 h-1 w-1.5 '
              />
            </div>
          </div>
          <a
                      href='/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex md:h-10 lg:h-14 '
                    >
                     <Button shape='search' >
                      {Data.welcomeBanner.buttonText}
                      </Button>

          </a>
        </div>
    </div>

    </section>
  );
};

export default WelcomeBanner;