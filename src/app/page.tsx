import { RippleDemo } from '@/components/example/rippledemo';
import { FlipTextDemo } from '@/components/example/fliptext';
import {MarqueeDemo} from '@/components/example/marquee';
import Ripple from '@/components/magicui/ripple';

export default function Home() {
  return (
    <main >
      <div className='w-full h-full  bg-slate-200'>
       <RippleDemo/>
       <Ripple/>
       <FlipTextDemo/>
       <MarqueeDemo/>
      </div>
    </main>
  );
}