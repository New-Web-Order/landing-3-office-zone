'use client';
import React from 'react';
import NextImage from 'next/image';

interface HilightCardProps {

    title: string;
    description: string;
    image: string;


}

const HilightCard: React.FC<HilightCardProps> = ({
    title,
    description,
    image


  }) => {
    return (
      <div className='w-full flex flex-col gap-3 items-center max-w-[24rem]'>
      <NextImage 
       src={image} 
  alt='car image' 
  width={500} 
  height={500} 
  className='w-full h-full rounded-md max-h-64'
      />

        <div className='flex flex-col gap-3 w-full items-center'>
          <h1 className='font-bold text-2xl text-fg-text-contrast'>{title}</h1>
          <p className='font-normal text-base text-fg-text text-center '>{description}</p>
        </div>
      </div>
    );
  };  


export default HilightCard;