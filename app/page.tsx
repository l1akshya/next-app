import Image from "next/image";
import "./styles.css"; // Import the CSS file

export default function Home() {
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


      <div className="bottle">
      <div className="ring"></div>

      <div className="t1"><h1>The Ultimate Companion</h1>
      <h2 >for Hydration</h2></div>

      <div className="t2"><h1>we believe in the power of hydration.</h1>
      <h2 >Our mission is simple yet vital</h2></div>

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
      </div>
    </div>
    
  );
}






