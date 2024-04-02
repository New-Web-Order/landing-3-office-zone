"use client";
import React from 'react'
import NextImage from 'next/image';
import Data from  '@/dictionaries/en.json'
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaDribbble} from "react-icons/fa";

interface TeamCardProps {

    title: string;
    subtitle: string;
    description: string;
    image: string;


}

const TeamCard: React.FC<TeamCardProps> = ({
    title,
    subtitle,
    description,
    image,


  }) => {
    return (
      <div className='w-full flex flex-col gap-6 items-center max-w-[24rem] p-3 bg-bg-1200 h-fit'>
      <NextImage 
       src={image} 
  alt="car image" 
  width={500} 
  height={500} 
  className='w-full h-full'
      />

        <div className='flex flex-col gap-4 w-full items-center '>
          <h1 className='font-bold text-xl text-bg-100 text-center'>{title} <br /> <span className='text-lg font-normal text-bg-100'>{subtitle}</span></h1>
          <p className='font-normal text-base text-bg-200 text-center '>{description}</p>
        </div>

        <div className="flex items-center gap-3.5 text-bg-200">

{Data.teamSection.SocialMediaLinks.map((link) => (
  <Link
    key={link.name}
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl"
  >
    {link.name === "dribble" && <FaDribbble />}
    {link.name === "twitter" && <FaXTwitter />}
    {link.name === "linkedin" && <FaLinkedin />}
  </Link>
))}
        </div>

      </div>
    );
  };  


export default TeamCard;