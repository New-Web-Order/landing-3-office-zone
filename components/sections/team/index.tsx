'use client';
import React from 'react';
// import Button from '@/components/ui/button';
// import NextImage from 'next/image';
import TeamCard from '@/components/ui/team-card';
import Data from '@/dictionaries/en.json';

const CardGrid = () => {
  return (
    <section className='w-full max-w-screen-xl flex flex-col items-center py-10 lg:py-24 gap-y-16 px-4 md:px-8 2xl:px-0 ' aria-label='Meet Our Team ' id='team'>
      <div className='w-full flex flex-col items-center gap-6 lg:gap-6'>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl text-bg-100 text-center '>{Data.teamSection.mainHeading}</h1>
        <p className='font-normal lg:font-semibold text-base md:text-lg lg:text-xl text-bg-200 text-center lg:max-w-full'>{Data.teamSection.mainText}</p>
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
        {Data.teamSection.cardInfo.map((option, index) => (
          <TeamCard
            key={index}
            title={option.title}
            subtitle={option.subtitle}
            description={option.description}
            image={option.image}

          />
        ))}
      </div>

    </section>
  );
};

export default CardGrid;