import { useRef, useEffect } from "react";
import gsap from "gsap";

function Loading() {
  const loadingRef = useRef(null);
  const loadingbg = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    const heroText = heroTextRef.current;
    const textWrapper = heroText.querySelector("#sdm");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loadingbg.current, {  opacity: 0, duration: 1,delay:2 });
      },
    });

    tl.to(loadingRef.current.children[1], { x: 0, duration: 1.5 })
      .to(loadingRef.current.children[3], { x: 0, duration: 1.5 }, "-=1.5")
      .to(loadingRef.current.children[0], { x: 0, duration: 1.5 }, "-=1.5")
      .to(loadingRef.current.children[4], { x: 0, duration: 1.5 }, "-=1.5");

    const t2 = gsap.timeline();
    t2.staggerFrom(
      heroText.querySelectorAll(".letter"),
      2,
      { opacity: 0, ease: "power4.inOut" },
      0.15,
      0.2
    );

    tl.play();
    t2.play();
  }, []);


  return (
    <div ref={loadingbg} className="bg-black w-screen h-screen absolute flex flex-col justify-center items-center">
      <div ref={loadingRef} className="flex space-x-8">
        <div className="bg-indigo-400 w-10 h-40 rounded-full mt-20 translate-x-[9rem]"></div>
        <div className="bg-indigo-600 w-10 h-60 rounded-full mt-10 translate-x-[4.5rem]"></div>
        <div className="bg-indigo-800 w-10 h-80 rounded-full"></div>
        <div className="bg-indigo-600 w-10 h-60 rounded-full mt-10 translate-x-[-4.5rem]"></div>
        <div className="bg-indigo-400 w-10 h-40 rounded-full mt-20 translate-x-[-9rem]"></div>
      </div>
      <div ref={heroTextRef} className="text-white mt-8 uppercase font-sans text-4xl">
        <span id="sdm">Sound Mingle</span>
      </div>
    </div>
  );
}
export default Loading;
