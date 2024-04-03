'use client';
import React from 'react';
import NextImage from 'next/image';
import User from '@/public/assets/icons/user.svg';
interface InstructorCardProps {

    title: string;
    description: string;


}

const InstructorCard: React.FC<InstructorCardProps> = ({
    title,
    description


  }) => {
    return (
      <div className='flex gap-1.5 lg:gap-3.5 items-start lg:items-center max-w-[16.875rem] rounded-lg lg:rounded-3xl bg-bg-1000 py-2 lg:py-3 w-32 lg:w-64 justify-center'>
      <NextImage 
       src={User} 
  alt='user' 
  width={500} 
  height={500} 
  className='lg:max-w-11 lg:max-h-11 max-w-5 max-h-5 '
      />

        <div className='flex flex-col gap-0 lg:gap-1 w-fit items-start '>
          <h1 className='font-bold text-[9px] lg:text-lg text-bg-100'>{title}</h1>
          <p className='font-normal text-[9px] lg:text-base text-bg-200 text-center '>{description}</p>
        </div>
      </div>
    );
  };  


export default InstructorCard;