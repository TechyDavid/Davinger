import Ripple from "@/components/magicui/ripple";
import classes from '@/components/example/rippledemo.module.css'
import ShimmerButton from "../magicui/shimmer-button";
 
export function RippleDemo() {
  return (
    <div className="flex justify-evenly h-full w-full flex-col bg-slate-200 overflow-hidden"> 
     <div className="z-20 flex justify-evenly h-[250px] my-8 left-0  w-full">
          <ul>
            <li className="text-2xl">Logo</li>
          </ul>
          <ul className={classes.omo}>
            <li><a href="">About</a></li>
            <li><a href="">Portfolio</a></li>
          </ul>
          <ul>
            <li>
            <ShimmerButton>
                <a
                  href="mailto:drufus015@gmail.com"
                  className=""
                >
                  drufus015@gmail.com
                </a>
              </ShimmerButton>
            </li>
          </ul>
     </div>
      {/* <div className="whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black font-monument">
        Ripple
      </div> */}
    </div>
  );
}