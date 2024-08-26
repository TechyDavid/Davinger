"use client";

import React, { useEffect, useRef, useState } from "react";
import FlipText from "@/components/magicui/flip-text";

export const FlipTextDemo = () => {
  const [opacity, setOpacity] = useState(1);
  const textRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const fadeStart = 100; // Adjust this value based on when you want the fade to start
      const fadeEnd = 300; // Adjust this value to control how far the fade-out happens
      
      if (rect.top <= fadeEnd) {
        const newOpacity = 1 - Math.min(Math.max((fadeEnd - rect.top) / (fadeEnd - fadeStart), 0), 1);
        setOpacity(newOpacity);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={textRef}
      className="text-4xl tracking-[-0.1em] text-black md:text-7xl md:leading-[5rem] font-monument"
      style={{
        opacity: opacity, // Apply dynamic opacity
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out', // Smooth transition for opacity and transform
      }}
    >
      <FlipText word="Elite" />
      <FlipText className="text-8xl" word="FRONTEND" />
      <FlipText className="text-9xl" word="EXPERT®" />
      <div className="flex justify-around w-full">
        <p className="w-56 text-xl font-sans tracking-[0em] text-left">
          Code the Future, One Line at a Time
        </p>
        <p className="w-56 text-xl font-sans tracking-[0em] text-left">
          Transforming Ideas into Interfaces, Step by Step
        </p>
      </div>
    </div>
  );
};
