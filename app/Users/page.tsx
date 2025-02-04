"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./login.css";

export default function Home() {
  const [shouldFadeRoadmap, setShouldFadeRoadmap] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = Array.from({ length: 23 }, (_, index) => `/i${index}.png`); // Ensure index starts from 0 to 23

  useEffect(() => {
    // Ensure the page starts at the top on reload
    const resetScroll = () => window.scrollTo(0, 0);
    
    resetScroll();
    window.addEventListener("load", resetScroll);

    setTimeout(() => {
      resetScroll();
      const startY = window.scrollY;
      const targetY = startY + 860;
      const duration = 2000;
      let startTime: number = 0;

      const smoothScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const scrollPosition = Math.min(startY + (progress / duration) * 860, targetY);
        window.scrollTo(0, scrollPosition);

        if (progress < duration) requestAnimationFrame(smoothScroll);
      };

      requestAnimationFrame(smoothScroll);
    }, 4000);

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const { innerHeight, scrollY } = window;
        const { scrollHeight } = document.documentElement;
        
        // Check if the user has reached the bottom
        const isAtBottom = innerHeight + scrollY >= scrollHeight - 50;
        setShouldFadeRoadmap(isAtBottom);

        if (isAtBottom) {
          setTimeout(() => {
            setCurrentImage((prev) => (prev + 1 < images.length ? prev + 1 : 0));
          }, 1500); // Smoother transition delay
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("load", resetScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images.length]);

  return (
    <div className="page-container">
      <head>
      <meta name="viewport" content="width=1280, initial-scale=1.0" /> {/* Fixed width for desktop */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <header className="header">
        <div className="header-content">
          <span className="header-text">Shop</span>
          <span className="header-text">Contact us</span>
          <span className="header-text">About</span>
          <span className="header-text">Journal</span>
          <span className="header-text">Custom</span>
          <button className="header-button">Inquiry Now</button>
        </div>
      </header>

      <div className="logo-container">
           <Image
                 src="/p1.png"
                 alt="Logo"
                 width={174}
                 height={40}
                 className="logo"
               />
             </div>
       
             <div className="page2">
               <Image src="/p7.png" alt="hand holding a bottle" width={756} height={880} className="rect1" />
               <Image src="/p8.png" alt="hand holding a bottle" width={756} height={880} className="rect2" />
             </div>
       
             <div className="bottle">
               <div className="ring"></div>
       
               <div className="t1">
                 <h1>The Ultimate Companion</h1>
                 <h2>for Hydration</h2>
               </div>
       
               <div className="t2">
                 <h1>we believe in the power of hydration.</h1>
                 <h2>Our mission is simple yet vital</h2>
               </div>
       
               <button className="bottom-button">Inquiry Now</button>
               <Image
                 src="/p2.png"
                 alt="bottle-bottom"
                 width={186}
                 height={793}
                 className="bottom"
               />
               <Image
                 src="/p3.png"
                 alt="bottle-bottom"
                 width={186}
                 height={793}
                 className="top"
               />
       
               <div>
                 <Image
                   src="/p5.png"
                   alt="bottle-bottom"
                   width={125}
                   height={125}
                   className="right"
                 />
                 <Image
                   src="/p6.png"
                   alt="bottle-bottom"
                   width={125}
                   height={125}
                   className="left"
                 />
               </div>
             </div>
       
             <div className="page3">
               <header className="header2">
                 <div className="header2content">
                   <span className="header2text1">Hydration Essentials</span>
                   <span className="header2text2">Discover Our Range of Premium Water Bottles</span>
                   <button className="header-button2">VIEW MORE</button>
                 </div>
               </header>
       
               <div className="products">
                 <Image src="/p31.png" alt="bottle1" width={420} height={420} className="p31" />
                 <p className="caption1">Rainbow 600</p>
                 <Image src="/p32.png" alt="bottle2" width={420} height={420} className="p32" />
                 <p className="caption2">Rio 650</p>
                 <Image src="/p33.png" alt="bottle3" width={420} height={420} className="p33" />
                 <p className="caption3">Big Bull 1300</p>
       
                 <div className="pbuttons">
                   <button className="pb1">LEARN MORE</button>
                   <button className="pb2">LEARN MORE</button>
                   <button className="pb3">LEARN MORE</button>
                   <button className="pb4">LEARN MORE</button>
                   <button className="pb5">LEARN MORE</button>
                   <button className="pb6">LEARN MORE</button>
                 </div>
       
                 <Image src="/p34.png" alt="bottle1" width={420} height={420} className="p34" />
                 <p className="caption4">Rome 600</p>
                 <Image src="/p32.png" alt="bottle2" width={420} height={420} className="p36" />
                 <p className="caption6">Rio 650</p>
                 <Image src="/p31.png" alt="bottle3" width={420} height={420} className="p35" />
                 <p className="caption5">Rainbow 600</p>
               </div>
             </div>
       
             <div className="page4">
               <Image
                 src="/r1.png"
                 alt="roadmap"
                 width={1520}
                 height={552}
                 className={`roadmap1 ${shouldFadeRoadmap ? "fade" : ""}`}
               />
       
               <div className={`plt ${shouldFadeRoadmap ? "fade" : ""}`}>
                 <p className="plt1">YOUR TRANSFORMATION, ONE STEP AT A TIME</p>
                 <p className="plt2">Fitness is a journey—every day brings</p>
                 <p className="plt3">you closer to the life you want</p>
               </div>
       
               <div className="p4r1"></div>
               <div className="p4r2"></div>
       
               <Image src="/p9.png" alt="logowhite" width={217.7} height={50} className="logo2" />
       
               <div className="socialmedia">
                 <button className="l1">
                   <Image src="/l1.png" alt="logofacebook" width={34} height={34} />
                 </button>
                 <button className="l2">
                   <Image src="/l2.png" alt="logoinstagram" width={34} height={34} />
                 </button>
                 <button className="l3">
                   <Image src="/l3.png" alt="logotwitter" width={34} height={34} />
                 </button>
               </div>
       
               <div className="footer">
                 <p className="footer-text">Shop</p>
                 <p className="footer-text">Contact us</p>
                 <p className="footer-text">About</p>
                 <p className="footer-text">Journal</p>
                 <p className="footer-text">Custom</p>
               </div>
       
               <div className="footer2">
                 <p className="footer2-text">FAQ &apos;s</p>
                 <p className="footer2-text">Returns</p>
                 <p className="footer2-text">Ordering</p>
                 <p className="footer2-text">Shipping</p>
                 <p className="footer2-text">Personalization Policies</p>
               </div>
       
               <p className="copyright">
                 Copyright &copy;2023 BOTOL.All Rights Reserved.
               </p>
       
               <Image
                 src={images[currentImage]}
                 alt="roadmap"
                 width={1300}
                 height={496}
                 className={`rm1 ${shouldFadeRoadmap ? "fade" : ""}`}
               />
             </div>
           </div>
         );
       }
       
       
       
       
       
       