"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import NumberTicker from "@/components/magicui/number-ticker";

export const ParallaxDemo = () => {
  const [offsetY, setOffsetY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (parallaxRef.current) {
      const rect = parallaxRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;

      if (scrollY === 0) {
        setOffsetY(0); // Reset the parallax effect when at the top of the page
      } else {
        setOffsetY(rect.top * -0.4); // Adjust this value to control the parallax speed
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center relative'>
      {/* Parallax Section */}
      <div
        ref={parallaxRef}
        className="relative rounded-3xl xl:w-[40%] lg:w-[65%] lg:h-[90vh] md:w-[70%] md:h-[70vh] sm:w-[70%] sm:h-[60vh] w-[90%] h-[50vh]"
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: 'transform 0.4s ease-out', // Smooth out the effect
        }}
      >
        <Image
          src="/images/David.png" // Replace with your image path
          alt="Parallax Background"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 rounded-3xl"
        />
      </div>

      {/* Ticker Section */}
      <div className="absolute flex flex-col justify-center items-center left-5 md:left-10 top-5 md:top-10 w-32 h-32 md:w-60 md:h-60 border-4 border-black dark:border-white mx-8 md:mx-32 rounded-full text-black dark:text-white text-xl md:text-2xl">
        <NumberTicker value={200} suffix='+' className='flex' />
        <h6 className='text-xs md:text-sm font-monument text-center'>
          Github contributions
        </h6>
      </div>
    </div>
  );
};
