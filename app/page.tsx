"use client";  // Add this directive to indicate this is a client-side component

import { useEffect } from "react";
import Image from "next/image";
import "./styles.css"; // Import the CSS file

export default function Home() {
  // useEffect hook to trigger scroll after 4 seconds
  useEffect(() => {
    // Timeout to delay the scroll action
    setTimeout(() => {
      let start = window.scrollY;  // Current scroll position
      let end = start + 860;        // Target position after scrolling (changed to 860 pixels)
      let duration = 2000;          // Duration for the scroll (2 seconds)
      let startTime = null;

      // Scroll function that smoothly scrolls the window down
      function scrollStep(timestamp: number) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let scrollPosition = Math.min(start + (progress / duration) * 860, end);  // Changed to 860 pixels
        window.scrollTo(0, scrollPosition);

        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      }

      // Start the scroll animation after 4 seconds
      requestAnimationFrame(scrollStep);
    }, 4000); // Wait 4 seconds before starting the scroll
  }, []); // Empty dependency array to run once when component mounts

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
            className="p31"
          />

        <p className="caption1">Rainbow 600</p>

       <Image
            src="/p32.png"
            alt="bottle2"
            width={420}
            height={420}
            className="p32"
          />
        <p className="caption2">Rio 650</p>

        <Image
            src="/p33.png"
            alt="bottle3"
            width={420}
            height={420}
            className="p33"
          />

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
            className="p34"
          />

        <p className="caption4">Rome 600</p>


        <Image
            src="/p32.png"
            alt="bottle2"
            width={420}
            height={420}
            className="p36"
          />
        <p className="caption6">Rio 650</p>

        <Image
            src="/p31.png"
            alt="bottle3"
            width={420}
            height={420}
            className="p35"
          />

        <p className="caption5">Rainbow 600</p>

        </div>

      </div>


    </div>
  );
}





