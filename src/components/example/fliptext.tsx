import FlipText from "@/components/magicui/flip-text";
 
export async function FlipTextDemo() {
  return (
    <div  className="text-4xl  tracking-[-0.1em] text-black md:text-7xl md:leading-[5rem] font-monument">
         <FlipText word="Elite" />
         <FlipText className="text-8xl" word="FRONTEND" />
         <FlipText className="text-9xl" word="EXPERT®" />
         <div className="flex justify-around  w-full">
         <p className="w-56 text-xl font-sans tracking-[0em] text-left">Code the Future, One Line at a Time</p>
         <p className="w-56 text-xl font-sans tracking-[0em] text-left">Transforming Ideas into Interfaces, Step by Step</p>
         </div>
    </div>
  );
}