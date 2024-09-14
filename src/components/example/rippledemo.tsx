import Ripple from "@/components/magicui/ripple";
import classes from '@/components/example/rippledemo.module.css'
import { Button } from "../ui/button";
import LogoSection from "./logo";
import { ModeToggle } from "./Modetoggle";
 
export function RippleDemo() {
  return (
    <div className="flex  h-auto w-full flex-col overflow-hidden bg-none"> 
     <div className="z-20 flex justify-around h-[250px] my-8 left-0  w-full">
          <ul>
            <li className="w-full sm:w-20">
              <LogoSection/>
            </li>
          </ul>
          <ul className="flex">
            <li>
            <Button className="text-sm" variant="outline">
                <a
                  href="mailto:drufus015@gmail.com"
                  className="text-black dark:text-white sm:text-sm"
                >
                  drufus015@gmail.com
                </a>
              </Button>
            </li>
            <li>
              <ModeToggle/>
            </li>
          </ul>
     </div>
      <div className="omo z-10 animate-ripple whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black font-monument overflow-hidden">
        <Ripple/>
      </div>
    </div>
  );
}