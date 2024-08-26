"use client";

import { RippleDemo } from '@/components/example/rippledemo';
import { FlipTextDemo } from '@/components/example/fliptext';
import {MarqueeDemo} from '@/components/example/marquee';
import Ripple from '@/components/magicui/ripple';
import { ParallaxDemo } from '@/components/example/ParallaxDemo';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <ParallaxProvider>
    <main >
      <div className='w-full h-full  bg-slate-200'>
       <RippleDemo/>
       <Ripple/>
       <FlipTextDemo/>
       <br /><br /><br />
       <ParallaxDemo/>
       <br /><br />
       <MarqueeDemo/>
      </div>
    </main>
    </ParallaxProvider>
  );
}