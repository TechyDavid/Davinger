"use client";

import { RippleDemo } from '@/components/example/rippledemo';
import { FlipTextDemo } from '@/components/example/fliptext';
import Ripple from '@/components/magicui/ripple';
import { ParallaxDemo } from '@/components/example/ParallaxDemo';
import { ParallaxProvider } from 'react-scroll-parallax';
import { FloatingNavDemo } from '@/components/example/floatingnavbardemo';

export default function Home() {
  return (
    <ParallaxProvider>
    <main >
      <div className='w-full h-full  bg-slate-200 dark:bg-black '>
        <FloatingNavDemo/>
       <RippleDemo/>
       <Ripple/>
       <FlipTextDemo/>
       <br /><br /><br />
       <ParallaxDemo/>
      </div>
    </main>
    </ParallaxProvider>
  );
}