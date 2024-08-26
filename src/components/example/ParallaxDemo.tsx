"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export const ParallaxDemo = () => {
  const [offsetY, setOffsetY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (parallaxRef.current) {
      const rect = parallaxRef.current.getBoundingClientRect();
      setOffsetY(rect.top * -0.2); // Adjust this value to control the parallax speed
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
    <div
      ref={parallaxRef}
      className="relative rounded-3xl w-6/12 h-[55vh] md:h-[90vh] lg:h-[100vh] overflow-hidden"
      style={{
        transform: `translateY(${offsetY}px)`,
        transition: 'transform 0.1s ease-out', // Smooth out the effect
      }}
    >
      <Image
        src="/images/rufus012.jpg" // Replace with your image path
        alt="Parallax Background"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 w-28 h-28 "
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-5xl font-bold text-white">Davigner</h1>
      </div>
    </div>
    </div>
  );
};
