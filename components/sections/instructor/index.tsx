"use client";
import React from 'react';
import Button from '@/components/ui/button';
import NextImage from 'next/image';
import InstructorCard from '@/components/ui/instructor-card';
import Instructor from '@/public/assets/images/instructor.webp'
import Data from '@/dictionaries/en.json';

const Instructions = () => {
  return (
        <section className='w-full max-w-screen-xl flex flex-col-reverse lg:flex-row items-center px-4 md:px-8 2xl:px-0 py-10 lg:py-24 gap-9 lg:gap-10 xl:gap-20'>

          <div className='flex flex-1 flex-col gap-6 lg:gap-9 max-w-[33rem]'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl text-bg-100 '>{Data.instruction.mainHeading}</h1>
            <p className='font-normal text-base md:text-lg lg:text-xl text-bg-100  '>{Data.instruction.mainText}</p>
            <a
                      href='/'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                     <Button shape="filled" >
                      {Data.instruction.buttonText}
                      </Button>

        </a>
          </div>

          <div className='flex flex-1 justify-end items-center relative'>
          <NextImage 
              src={Instructor}
              alt='Instructor Image'
              className='max-w-[90%] lg:max-w-[29rem] xl:max-w-full'
              />
        <div className='w-fit flex flex-col gap-2 lg:gap-4 absolute z-10 left-0 bottom-8'>
          {Data.instruction.cardInfo.map((option, index) => (
          <InstructorCard
            key={index}
            title={option.title}
            description={option.description}

          />
        ))}
         </div>
         </div>

            
        </section>
  ) 
}

export default Instructions