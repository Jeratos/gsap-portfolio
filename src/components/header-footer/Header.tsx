import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {motion} from "motion/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<boolean>(false);
  const [hoveredLink2, setHoveredLink2] = useState<boolean>(false);
  const [hoveredLink3, setHoveredLink3] = useState<boolean>(false);
  const navigate = useNavigate();
  const container = useRef(null);

  
  useGSAP(()=>{
      if(open){

        gsap.from(container.current?.querySelectorAll(".link"),{  
          rotateX:-90,
          opacity:0,
          duration:.5,
          stagger:{
            amount:-0.2
          }
        })        
      }

     
        },{dependencies:[open],scope:container})

  return (
    <>
       <header >
        <div className="flex justify-between items-center fixed  top-0 left-0 right-0 z-40">
          <h1
            className="hover:text-green-300 cursor-pointer transition-all duration-300 text-2xl font-semibold ml-10"
            onClick={() => navigate("/")}
          >
            logo
          </h1>

          <div
            onClick={() => setOpen(!open)}
            className="relative h-10 w-60 bg-black  overflow-hidden text-right pt-1 cursor-pointer
            after:content-['']
            after:absolute after:inset-0
            after:bg-green-300
            after:-translate-y-full
            after:transition-transform after:duration-300
            hover:after:translate-y-0"
          >
            <HiBars3BottomLeft className="text-3xl text-red-500 ml-[80%]" />
          </div>
        </div>
      </header>
         {/* FULLSCREEN MENU */}
      {open && (
        <div
          ref={container}
          className="fixed inset-0 z-40 h-screen w-full bg-gray-950 overflow-hidden"
        >

          <motion.div
          
          animate={{y:[-10,0],opacity:[0,1],rotate:[0,45]}}
          transition={{duration:0.5,repeatType:"reverse"}}
          whileHover={{scale:1.2,rotate:-2}}
          whileTap={{scale:0.8,rotate:45}}
          onClick={()=>setOpen(false)}
          className="h-25 w-25 m-5 absolute cursor-pointer rounded-full top-0 right-0 ">
                      <div className="absolute right-12 rotate-45 h-25 w-0.5 bg-green-500"></div>
                      <div className="absolute left-12 -rotate-45 h-25 w-0.5 bg-green-500"></div>

          </motion.div>
          <div className="text-center flex text-white flex-col justify-center text-7xl font-[font2] uppercase leading-[15vh] mt-40">

            {/* HOME */}
              <div
              onClick={() => {
                navigate("/");
                setOpen(false);
              }}
              onMouseEnter={() => setHoveredLink(true)}
              onMouseLeave={() => setHoveredLink(false)}
              className="relative origin-top border-y pt-1 border-white link perspective-[1000px]"
            >
              <h1>Home</h1>
              {hoveredLink&&(<>
              <div className="font-[font1] autoscroll-x bg-green-300 moveLink y-animation absolute top-0 left-0 flex gap-10">
                <div className="flex h-full items-center gap-5 mx-5">
                  <span className="whitespace-nowrap">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap ">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                <div className="w-20"></div>
                <div className="ml-10 flex h-full items-center gap-5">
                  <span className="whitespace-nowrap ">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                
               </div> 
               {/* <div className="autoscroll-x bg-green-300 moveLink absolute top-0 left-0 flex gap-10">
                <div className="flex h-full items-center gap-5 mx-5">
                  <span className="whitespace-nowrap">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap ">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                <div className="w-20"></div>
                <div className="ml-10 flex h-full items-center gap-5">
                  <span className="whitespace-nowrap ">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                
              </div> */}
              </>

              )}
            </div>
            {/* projects */}
            <div
              onClick={() => {
                navigate("/projects");
                setOpen(false);
              }}
              onMouseEnter={() => setHoveredLink2(true)}
              onMouseLeave={() => setHoveredLink2(false)}
              className="relative origin-top border-y pt-1 border-white link"
            >
              <h1>Projects</h1>
                 {hoveredLink2&&(
              <>
                  <div className="font-[font1] autoscroll-x bg-green-300 moveLink absolute top-0 left-0 flex gap-10">
                <div className="flex h-full items-center gap-5 mx-5">
                  <span className="whitespace-nowrap">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap ">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                <div className="w-20"></div>
                <div className="ml-10 flex h-full items-center gap-5">
                  <span className="whitespace-nowrap ">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                
              </div>
              <div className="font-[font1] autoscroll-x bg-green-300 moveLink absolute top-0 left-0 flex gap-10">
                <div className="flex h-full items-center gap-5 mx-5">
                  <span className="whitespace-nowrap">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap ">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                <div className="w-20"></div>
                <div className="ml-10 flex h-full items-center gap-5">
                  <span className="whitespace-nowrap ">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                
              </div>
              </>

              )}
            </div>
            {/* about */}
            <div
              onClick={() => {
                navigate("/agence");
                setOpen(false);
              }}
              onMouseEnter={() => setHoveredLink3(true)}
              onMouseLeave={() => setHoveredLink3(false)}
              className="relative origin-top border-y pt-1 bo link border-white"
            >
              <h1>About</h1>
              {hoveredLink3&&(
                <>
                <div className="font-[font1] autoscroll-x bg-green-300 moveLink absolute top-0 left-0 flex gap-10">
                <div className="flex h-full items-center gap-5 mx-5">
                  <span className="whitespace-nowrap">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap ">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                <div className="w-20"></div>
                <div className="ml-10 flex h-full items-center gap-5">
                  <span className="whitespace-nowrap ">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                
              </div>
              <div className="font-[font1] autoscroll-x bg-green-300 moveLink absolute top-0 left-0 flex gap-10">
                <div className="flex h-full items-center gap-5 mx-5">
                  <span className="whitespace-nowrap">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap ">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                <div className="w-20"></div>
                <div className="ml-10 flex h-full items-center gap-5">
                  <span className="whitespace-nowrap ">my landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home.jpg"
                    alt=""
                  />
                  <span className="whitespace-nowrap">landing page</span>
                  <img
                    className="h-15 w-30 rounded-full"
                    src="/image/home3.jpg"
                    alt=""
                  />
                </div>
                
              </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
