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
            <li className="w-full sm:w-20">
              <LogoSection/>
            </li>
          </ul>
          <ul className={classes.omo}>
            <li className="md:text-xl sm:text-sm"><a href="">About</a></li>
            <li className="md:text-xl sm:text-sm"><a href="">Portfolio</a></li>
          </ul>
          <ul>
            <li>
            <Button className="text-sm" variant="outline">
                <a
                  href="mailto:drufus015@gmail.com"
                  className="text-white sm:text-sm"
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