import Ripple from "@/components/magicui/ripple";
import classes from '@/components/example/rippledemo.module.css'
import ShimmerButton from "../magicui/shimmer-button";
import { Button } from "../ui/button";
import LogoSection from "./logo";
 
export function RippleDemo() {
  return (
    <div className="flex justify-evenly h-full w-full flex-col bg-slate-200 overflow-hidden"> 
     <div className="z-20 flex justify-evenly h-[250px] my-8 left-0  w-full">
          <ul>
            <li className="text-2xl">
              <LogoSection/>
            </li>
          </ul>
          <ul className={classes.omo}>
            <li><a href="">About</a></li>
            <li><a href="">Portfolio</a></li>
          </ul>
          <ul>
            <li>
            <Button>
                <a
                  href="mailto:drufus015@gmail.com"
                  className=""
                >
                  drufus015@gmail.com
                </a>
              </Button>
            </li>
          </ul>
     </div>
      {/* <div className="whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black font-monument">
        Ripple
      </div> */}
    </div>
  );
}