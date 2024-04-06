'use client';
import React from 'react';
import Button from '@/components/ui/button';
import Data from '@/dictionaries/en.json';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';


const WelcomeBanner = () => {
  return (
    <section className='w-screen h-screen flex items-center justify-center px-4 md:px-8 2xl:px-0 saturate-25 before:block before:absolute before:top-0 before:-inset-1 before:bg-black before:bg-opacity-60 before:h-full'
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
        <div className='w-full rounded-xl md:rounded-full bg-1200 px-3 py-3 md:pr-8 md:pl-10 md:py-4 2xl:py-6 2xl:px-16 flex justify-between items-center bg-bg-bg shadow-2xl'>
          <div className='w-fit flex items-center justify-center gap-3'>
<Select>
  <SelectTrigger className='w-fit sm:min-w-[4rem] md:min-w-[6rem] lg:min-w-[8rem] max-w-[12rem] text-fg-text' >
    <SelectValue placeholder='Location' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value='Europe'>Europe</SelectItem>
    <SelectItem value='North America'>North America</SelectItem>
    <SelectItem value='South America'>South America</SelectItem>
    <SelectItem value='Australia'>Australia</SelectItem>
    <SelectItem value='Asia'>Asia</SelectItem>
  </SelectContent>
</Select>

<Select>
  <SelectTrigger className='w-fit sm:min-w-[4rem] md:min-w-[6rem] lg:min-w-[8rem] max-w-[8rem] text-fg-text'>
    <SelectValue placeholder='People' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value='11-30 people'>11-30</SelectItem>
    <SelectItem value='31-50 people'>31-50</SelectItem>
    <SelectItem value='51-70 people'>51-70</SelectItem>
    <SelectItem value='71-90 people'>71-90</SelectItem>
    <SelectItem value='91-100 people'>91-100</SelectItem>
  </SelectContent>
</Select>

<Select>
  <SelectTrigger className='w-fit sm:min-w-[4rem] md:min-w-[6rem] lg:min-w-[8rem] max-w-[8rem] text-fg-text'>
    <SelectValue placeholder='City' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value='California'>California</SelectItem>
    <SelectItem value='Dubai'>Dubai</SelectItem>
    <SelectItem value='Tokyo'>Tokyo</SelectItem>
    <SelectItem value='Seoul'>Seoul</SelectItem>
    <SelectItem value='Moscow'>Moscow</SelectItem>
  </SelectContent>
</Select>  


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