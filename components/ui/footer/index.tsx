'use client';
import React from 'react';
// import { useRouter } from 'next/navigation';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import Data from '@/dictionaries/en.json';
import ThemeToggle from '@/components/ui/toggle-theme';
import NexthemeToggle from '@/components/ui/next-theme-toggle';

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

const Footer = () => {
  // const router = useRouter();
  return (
    <div className='w-full flex justify-center py-9 lg:py-16 px-4 md:px-8 2xl:px-0   '>
      <div className='w-full max-w-screen-xl'>
      <div className='flex flex-col w-full gap-16'>
        <div className='w-full flex justify-center items-center'>
          <h1 className='text-5xl md:text-7xl lg:text-9xl xl:text-[13.75rem] text-fg-text-contrast'>{Data.footer.hugeText}</h1>
        </div>
        <div className='flex justify-between w-full flex-col md:flex-row items-center gap-8 md:gap-16'>
        <div className='w-full lg:w-fit flex flex-col gap-5 lg:gap-6 items-center md:items-start'>
            <h1 className='font-semibold text-2xl text-fg-text-contrast md:text-3xl lg:text-5xl md:max-w-[18.688rem] lg:max-w-[22.688rem] text-center md:text-start'>{Data.footer.mainText}</h1>
            <div className='flex flex-col md:flex-row w-full lg:w-fit h-fit gap-3'>
            <Input
              placeholder={Data.footer.placeholder}
              type='email'
            />
                    <a
                      href='/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex lg:h-14'
                    >
                     <Button shape='subscribe' >
                      {Data.footer.buttonText}
                      </Button>

        </a>
            </div>
            <p className='font-normal text-xs lg:text-sm text-fg-text-contrast hover:text-gray-400 cursor-pointer'>{Data.footer.privacyPolicy}</p>
        </div>

        <div className='flex w-full lg:w-fit lg:gap-20 xl:gap-24 justify-between lg:justify-center'>

            <div className='flex flex-col gap-4 lg:gap-6'>
                <h1 className='font-bold text-xl text-fg-text cursor-pointer'>{Data.footer.about}</h1>
                <div className='flex flex-col gap-2'>
          {Data.footer.aboutLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=' text-sm font-medium lg:text-lg text-fg-text-contrast hover:text-gray-400'
            >
              {item.name}
            </a>
          ))}
            </div>
          </div>
            <div className='flex flex-col gap-4 lg:gap-6'>
            <h1 className='font-bold text-xl text-fg-text cursor-pointer'>{Data.footer.workspace}</h1>
            <div className='flex flex-col gap-2'>

          {Data.footer.workspaceLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=' text-sm font-medium lg:text-lg text-fg-text-contrast hover:text-gray-400'
            >
              {item.name}
            </a>
          ))}
            </div>
          </div>
            <div className='flex flex-col gap-4 lg:gap-6'>
            <h1 className='font-bold text-xl text-fg-text cursor-pointer'>{Data.footer.location}</h1>
            <div className='flex flex-col gap-2'>
          {Data.footer.cityinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=' text-sm font-medium lg:text-lg text-fg-text-contrast hover:text-gray-400'
            >
              {item.name}
            </a>
          ))}
            </div>
          </div>
        </div>

        </div>
        <div className='w-full flex justify-between items-center pt-20 '>
            <div className='flex items-center justify-center w-fit md py-5 '>
                <p className='text-sm text-fg-text'>Realised by
                    <a href='https://www.newweborder.co/' target='_blank' className='hover:cursor-pointer hover:bg-black/90 rounded-sm hover:text-[#23FA4B] hover:transition-color ease-in-out duration-300'>◬ ɴᴇᴡ ᴡᴇʙ ᴏʀᴅᴇʀ_</a>
                </p>
            </div>
            {/* <ThemeToggle/> */}
            <NexthemeToggle/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;