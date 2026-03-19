import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Agence() {
const [image,setImage] = useState("");
const imageArr= [
  "/image/my_professional.png",
  "/image/project.jpg",
  "/image/my_prof.png",
  "/image/agence.jpg",
  "/image/casual2.png",
  "/image/casual.png",
  "/image/home.jpg",
  "/image/project2.jpg",
  "/image/agence2.jpg",
  "/image/my_professional.png"
]

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  function imageChange(item: globalThis.ScrollTrigger){
            if(item.progress > 0){
              setImage(imageArr[0]);
            }
            if(item.progress > 0.10){
              setImage(imageArr[1]);
            }
            if(item.progress > 0.20){
              setImage(imageArr[2]);
            }
            if(item.progress > 0.30){
              setImage(imageArr[3]);
            }
            if(item.progress > 0.40){
              setImage(imageArr[4]);
            }
            if(item.progress > 0.50){
              setImage(imageArr[5]);
            }
            if(item.progress > 0.60){
              setImage(imageArr[6]);
            }
            if(item.progress > 0.70){
              setImage(imageArr[7]);
            }
            if(item.progress > 0.80){
              setImage(imageArr[8]);
            }
            if(item.progress > 0.90){
              setImage(imageArr[9]);
            }
            if(item.progress > 1){
              setImage(imageArr[10]);
            }
  }
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 38%",
        end: "top -70%",
        // markers:true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        // pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => imageChange(self),
      },
    });

    gsap.from(imageRef.current, {
        opacity: 0,
        y: 100,
        delay:1,
        // ease: "power2.out",
    })
  });
  
  return (
    <>
      <div className="font-[font2] section1 py-1">
        <div
          className="absolute overflow-hidden top-46 left-119 h-70 w-55 z-[-1] rounded-2xl "
          ref={imageDivRef}
        >
          <img className="w-full h-full object-cover" ref={imageRef} src={image} alt="" />
        </div>
        <div className="relative mt-[50vh] ">
          <div className=" mr-30">
            <h1 className="text-[9vw] text-right leading-36 uppercase  ">
              Full-Stack Engineer |<br /> Product Builder
            </h1>
          </div>
          <div className="w-[90%] pl-[40%] mx-auto mt-5 ">
            <p className="text-5xl leading-[3vw] ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              I approach development like a founder — thinking beyond code and
              focusing on product scalability, user experience, and long-term
              growth. With expertise in MERN, Python, and cloud infrastructure,
              I create systems built to evolve.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </>
  );
}
