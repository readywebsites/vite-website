import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

export default function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      delay: "-1",
      duration: 2,
      ease: "expo.InOut",
    });

    gsap.to(".sky", {
      rotate: 0,
      scale: 2,
      delay: -0.5,
      duration: 2,
      ease: "expo.InOut",
    });

    gsap.to(".bg", {
      rotate: 0,
      scale: 1.2,
      delay: -0.9,
      duration: 2,
      ease: "expo.InOut",
    });

    gsap.to(".character", {
      rotate: 0,
      scale: 1.5,
      bottom: "-30%",
      x: "-50%",
      delay: -0.9,
      duration: 2,
      ease: "expo.InOut",
    });

    gsap.to(".text", {
      rotate: 0,
      scale: 1,
      left: "46%",
      top: "20px",
      delay: -0.9,
      duration: 2,
      ease: "expo.InOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.7) * 60;
      gsap.to(".main .text", {
        x: `${xMove * 0.9}%`,
      });

      gsap.to(".sky", {
        x: xMove * 5,
      });

      gsap.to(".bg", {
        x: xMove * 2,
      });
    });
  }, [showContent]);

  // Scroll Down ફંક્શન
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  // Added click handler for lines div
  const handleLinesClick = () => {
    alert("Lines clicked!");
    // અહીં તમારું લોજિક મૂકી શકો છો
  };

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="bg-black main w-full h-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden w-full h-screen bg-black">
            <div className="navbar w-full py-5 px-5 absolute top-0 left-0 z-10">
              <div className="logo flex gap-7">
                <div
                  className="lines py-3 flex flex-col gap-1 cursor-pointer"
                  onClick={handleLinesClick}
                >
                  <div className="line w-13 bg-white h-1"></div>
                  <div className="line w-10 bg-white h-1"></div>
                  <div className="line w-6 bg-white h-1"></div>
                </div>
                <h3 className="text-3xl leading-none mt-[3px] text-white">Rockstar</h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen">
              <img
                className="absolute top-0 left-0 sky scale-[5] rotate-[-20deg] w-full h-full object-cover"
                src="./sunsetimg.png"
                alt=""
              />
              <img
                className="absolute top-0 left-0 bg w-full scale-[3] rotate-[-25deg] h-full object-cover"
                src="./bg.png"
                alt=""
              />

              <div className="text  text-white absolute top-5 flex flex-col gap-7 left-[46%] -translate-x-1/2 scale-[2] -rotate-[20deg]">
                <h1 className="text-[8rem] -ml-40 leading-none m-0">grand</h1>
                <h1 className="text-[8rem] ml-20 leading-none m-0">theft</h1>
                <h1 className="text-[8rem] -ml-40 leading-none m-0">auto</h1>
              </div>

              <img
                className="absolute h-screen character scale-[2] -rotate-[25deg] -bottom-[150%] left-1/2 -translate-x-1/2 object-cover"
                src="./jason.png"
                alt=""
              />
            </div>

            <div
              className="btmbar text-white absolute bottom-1/2 left-0 w-full py-10 px-5 bg-gradient-to-t from-black to-transparent cursor-pointer"
              onClick={handleScrollDown}
            >
              <div className="flex gap-4 items-center">
                <i className="ri-arrow-down-line text-3xl"></i>
                <h3 className="font-[Helvetica_Now_Display] text-xl">Scroll Down</h3>
              </div>
              <img
                className="h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg w-1/2 px-10 flex items-center justify-center bg-black">
                <img className="h-full object-contain" src="./imag.png" alt="image" />
              </div>

              <div className="rg w-1/2 flex flex-col items-start justify-center px-10">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Not Hunting</h1>
                <p className="mt-5 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-4 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-6 py-3 text-black mt-8 text-2xl rounded-xl hover:bg-yellow-400 transition">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
