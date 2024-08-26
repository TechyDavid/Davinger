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
    <div
      ref={parallaxRef}
      className="relative w-full h-[75vh] md:h-[90vh] lg:h-[100vh] overflow-hidden"
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
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-5xl font-bold text-white">Parallax Effect</h1>
      </div>
    </div>
  );
};
