import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
export default function Stairs({children}: {children: React.ReactNode}) {
  const currentPath = useLocation().pathname;
  const stairsRef = useRef(null);
  const contentRef = useRef(null);
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(stairsRef.current, {
      display: "block",
    });
    tl.from(".stairs", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });

    tl.to(".stairs", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(stairsRef.current, {
      display: "none",
    });

    tl.to(".stairs", {
      y: 0,
    });

    gsap.from(contentRef.current, {
      opacity: 0,
      y: 100,
      delay: 1,

    });
  }, [currentPath]);
  return (
    <>
      
        <div className="fixed top-0 left-0 w-full h-full z-110" ref={stairsRef}>
          <div className="flex h-full w-full">
            <div className="stairs h-full w-1/5 bg-black"></div>
            <div className="stairs h-full w-1/5 bg-black"></div>
            <div className="stairs h-full w-1/5 bg-black"></div>
            <div className="stairs h-full w-1/5 bg-black"></div>
            <div className="stairs h-full w-1/5 bg-black"></div>
            <div className="stairs h-full w-1/5 bg-black"></div>
          </div>
        </div>

        <div ref={contentRef}>{children}</div>
    </>
  );
}
