"use client"; 

import { useEffect } from "react";
import Image from "next/image";
import "./styles.css";

export default function Home() {
  useEffect(() => {
    // Ensure the page always starts at the top on reload
    const resetScroll = () => {
      window.scrollTo(0, 0);
    };

    resetScroll();
    window.addEventListener("load", resetScroll);

    setTimeout(() => {
      resetScroll();
      let start = window.scrollY;
      let end = start + 860;
      let duration = 2000;
      let startTime = null;

      function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let scrollPosition = Math.min(start + (progress / duration) * 860, end);
        window.scrollTo(0, scrollPosition);

        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      }

      requestAnimationFrame(scrollStep);
    }, 4000);

    return () => {
      window.removeEventListener("load", resetScroll);
    };
  }, []);

  return (
    <div className="page-container">
      <link
        href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
        rel="stylesheet"
      />


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
        <Image src="/p7.png" alt="hand holding a bottle" width={756} height={880} className="rect1"/>
        <Image src="/p8.png" alt="hand holding a bottle" width={756} height={880} className="rect2"/>
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

          <Image 
          src="/p31.png" 
          alt="bottle1" 
          width={420} 
          height={420} 
          className="p31"/>

          <p className="caption1">Rainbow 600</p>

          <Image 
          src="/p32.png" 
          alt="bottle2" 
          width={420} 
          height={420} 
          className="p32"/>

          <p className="caption2">Rio 650</p>

          <Image 
          src="/p33.png" 
          alt="bottle3" 
          width={420} 
          height={420} 
          className="p33"/>

          <p className="caption3">Big Bull 1300</p>

          <div className="pbuttons">
            <button className="pb1">LEARN MORE</button>
            <button className="pb2">LEARN MORE</button>
            <button className="pb3">LEARN MORE</button>
            <button className="pb4">LEARN MORE</button>
            <button className="pb5">LEARN MORE</button>
            <button className="pb6">LEARN MORE</button>
          </div>


          <Image 
          src="/p34.png" 
          alt="bottle1" 
          width={420} 
          height={420} 
          className="p34"/>

          <p className="caption4">Rome 600</p>

          <Image 
          src="/p32.png" 
          alt="bottle2" 
          width={420} 
          height={420} 
          className="p36"/>

          <p className="caption6">Rio 650</p>

          <Image 
          src="/p31.png" 
          alt="bottle3" 
          width={420} 
          height={420} 
          className="p35"/>

          <p className="caption5">Rainbow 600</p>

        </div>
      </div>



      <div className="page4">

        <Image 
        src="/r1.png" 
        alt="bottle2" 
        width={1520} 
        height={552} 
        className="roadmap1"/>

        <div className="p4r1"></div>
        <div className="p4r2"></div>

        <Image 
        src="/p9.png" 
        alt="logowhite" 
        width={217.7} 
        height={50} 
        className="logo2"/>

      <div className="socialmedia">
        <button className="l1">
          <Image 
            src="/l1.png" 
            alt="logofacebook" 
            width={34} 
            height={34} 
          />
        </button>

        <button className="l2">
          <Image 
            src="/l2.png" 
            alt="logoinstagram" 
            width={34} 
            height={34} 
          />
        </button>

        <button className="l3">
          <Image 
            src="/l3.png" 
            alt="logotwitter" 
            width={34} 
            height={34} 
          />
        </button>
      </div>


      <div className="footer">

        <p className="footer-text">Shop</p>
        <p className="footer-text">Contact us</p>
        <p className="footer-text">About</p>
        <p className="footer-text">Journal</p>
        <p className="footer-text">Custom</p>
      </div>

        
      </div>


    </div>
  );
}





