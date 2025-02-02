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
        <div className="rect1"></div>
        <div className="rect2"></div>
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
    </div>
  );
}





