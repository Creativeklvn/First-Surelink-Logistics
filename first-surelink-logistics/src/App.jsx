import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import "./App.css";


import globalIcon from "/images/global.png";
import partnershipIcon from "/images/partnership.png";
import insuranceIcon from "/images/insurance.png";

function App() {

   const [menuOpen, setMenuOpen] = useState(false);


  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    videoRef.current.play();
    setPlaying(true);


  };

  return (
    <div>
<header className="header">
  <div className="logo">
    <img src="/images/logo2.PNG" alt="Sea freight" />
  </div>

  <nav className="nav">
    
    <Link to="/" className="nav-link active">
      Home
    </Link>

    <Link to="/tracking" className="nav-link">
      Tracking
    </Link>

    <div className="dropdown">
      <span className="nav-link">Services ▾</span>

      <div className="dropdown-menu">
        <Link to="/sea-freight" className="dropdown-link">
          Sea Freight
        </Link>
        <Link to="/land-freight" className="dropdown-link">
          Land Freight
        </Link>
        <Link to="/air-freight" className="dropdown-link">
          Air Freight
        </Link>
        <Link to="/warehousing" className="dropdown-link">
          Warehousing
        </Link>
        <Link to="/customs-clearing" className="dropdown-link">
          Customs Clearing
        </Link>
      </div>
    </div>

    <div className="dropdown">
      <span className="nav-link">Company ▾</span>

      <div className="dropdown-menu">
        <Link to="/about" className="dropdown-link">
          About Us
        </Link>
        <Link to="/team" className="dropdown-link">
          Our Team
        </Link>
        <Link to="/careers" className="dropdown-link">
          Careers
        </Link>
        <Link to="/news" className="dropdown-link">
          News & Updates
        </Link>
      </div>
    </div>
  </nav>

    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
</div>
</header>
    <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
      <Link className="mobile-item" to="/">Home</Link>
      <Link className="mobile-item" to="/tracking">Tracking</Link>
      <Link className="mobile-item" to="/sea-freight">Sea Freight</Link>
      <Link className="mobile-item" to="/land-freight">Land Freight</Link>
      <Link className="mobile-item" to="/air-freight">Air Freight</Link>
      <Link className="mobile-item" to="/warehousing">Warehousing</Link>
      <Link className="mobile-item" to="/customs-clearing">Customs Clearing</Link>
      <Link className="mobile-item" to="/about">About Us</Link>
      <Link className="mobile-item" to="/contact">Contact</Link>
    </div>

      <section className="hero">
        <div className="hero-overlay">
          <h1>Import & Export Logistics Made Simple</h1>
          <p>
            Providing secure, reliable, and cost-effective import, export,
            clearing, forwarding, and logistics solutions with exceptional
            customer service.
          </p>
        </div>
      </section>

      <section className="tracking">
        <h2>Tracking</h2>
        <p>Enter a Container / Booking- or B/L-Number</p>
        <div className="tracking-box">
          <input placeholder="Container / Booking- or B/L-Number" />
          <button>Track</button>
        </div>
      </section>

      <section className="core">
        <div>
          <h2>Our Core Transport Channels</h2>
          </div>
          </section>

      <section className="service white">
        <div>
          <h2>Global Sea Freight</h2>
          <p>
            We deliver dependable and cost-effective sea freight solutions that
            connect businesses and individuals to major ports across the globe.
          </p>
          <button>Sea freight services</button>
        </div>
        <img src="/images/hero.webp" alt="Sea freight" />
      </section>

      <section className="service blue">
        <img src="/images/hero.webp" alt="Land freight" />
        <div>
          <h2>Land Freight</h2>
          <p>
            We provide reliable and efficient road transportation services for
            businesses and individuals.
          </p>
          <button>See freight services</button>
        </div>
      </section>

      <section className="service white">
        <div>
          <h2>Air Freight</h2>
          <p>
            First Sure Link Logistics provides fast, reliable, and efficient air
            freight services for businesses and individuals.
          </p>
          <button>See freight services</button>
        </div>
        <img src="/images/hero.webp" alt="Air freight" />
      </section>

      <section className="features">
        <Feature title="Flexible around you" />
        <Feature title="100% independent" />
        <Feature title="All modes of transport" />
      </section>


      <section className="continent-section">
                <div className="continent-header">
          <h2>Global Shipping Routes</h2>
        </div>
        <div className="continent-video">
          
      <video
        ref={videoRef}
        onPause={() => setPlaying(false)}
        controls={playing}
      >
       <source
  src="https://res.cloudinary.com/dtj7gatn2/video/upload/video-output-F43B314B-2B47-4907-B1D4-90A4C0A84274-1_xklrzy.mov"
  type="video/mp4"
/>
      </video>

      {!playing && (
        <button className="play-btn" onClick={playVideo}>
          ▶
        </button>
      )}
    </div>

        <Continent title="Asia" />
        <Continent title="Europe" />
        <Continent title="Africa" />
        <Continent title="North America" />
        <Continent title="South America" />
      </section>


      <section className="red-section">
        <div>
          <h2>Reliable Shipment Tracking</h2>
          <p>
            Monitor your shipments with confidence using First Sure Link
            Logistics. Our intelligent tracking platform gives you real-time
            visibility, shipment updates, document access, and delivery insights.
          </p>
          <button>Track made easy</button>
        </div>
        <div className="big-icon">📍</div>
      </section>


      <section className="smart">
          <div className="container">
    <img src="/images/container.png" alt="Sea freight" />
  </div>
        <div className="smart-logistics">
        <h2>Connecting Global Trade Through Smarter Logistics.</h2>

        <div className="smart-grid">
  <InfoCard
    icon={partnershipIcon}
    title="Global Carrier Partnerships"
    description="At First Sure Link Logistics, we work closely with 
    leading shipping lines and logistics partners around the world to 
    secure competitive freight rates, dependable cargo space, flexible 
    shipping options, and efficient transit times. Our strong industry 
    relationships help us deliver reliable and cost-effective logistics 
    solutions for every shipment."
  />

  <InfoCard
    icon={globalIcon}
    title="Global Shipping Network"
    description="Ship to and from virtually anywhere in the world with 
    confidence. Through our extensive international network of trusted 
    partners, we provide seamless import and export services across Asia, 
    Africa, Europe, North America, South America, and beyond, ensuring your 
    cargo reaches its destination safely and efficiently."
  />

  <InfoCard
    icon={insuranceIcon}
    title="Cargo Insurance"
    description="Protect your shipments against unexpected risks with 
    our cargo insurance solutions. From loading and unloading operations to 
    theft, damage, loss, and unforeseen transit incidents, we help safeguard 
    your cargo throughout its journey, giving you added confidence and peace of mind."
  />
</div>
    </div>
    </section>


      <section className="tagline">
        <h2>Wherever Life Takes You, First Sure Link Delivers</h2>
        <p>
          Let First Sure Link Logistics handle your shipping and logistics while
          you focus on what matters most.
        </p>
      </section>


      <footer className="footer">
        <div>
        <div className="footer-logo">
    <img src="/images/logo2.PNG" alt="Sea freight" />
  </div>
          <h2>First Sure Link Logistics</h2>
          <p>081111818</p>
          <p>firstsurelink@gmail.com</p>
          <p>Address:</p>
        </div>

<FooterLinks
  title="Services"
  items={[
    { label: "Air Freight", link: "/air-freight" },
    { label: "Land Freight", link: "/land-freight" },
    { label: "Sea Freight", link: "/sea-freight" },
    { label: "Warehousing", link: "/warehousing" },
  ]}
/>

<FooterLinks
  title="Route"
  items={[
    { label: "Africa", link: "/africa" },
    { label: "Europe", link: "/europe" },
    { label: "Asia", link: "/asia" },
    { label: "North America", link: "/north-america" },
    { label: "South America", link: "/south-america" },
  ]}
/>

<FooterLinks
  title="Company"
  items={[
    { label: "About Us", link: "/about" },
    { label: "Tracking", link: "/tracking" },
    { label: "Contact Us", link: "/contact" },
    { label: "Privacy Policy", link: "/privacy-policy" },
    { label: "Terms and Conditions", link: "/terms-and-conditions" },
  ]}
/> </footer>
    </div>
  );
}

function Feature({ title }) {
  return (
    <div className="feature-card">
      <div className="icon">✦</div>
      <h3>{title}</h3>
      <p>
        We don’t push you into standard global freight solutions. We design
        bespoke, optimized solutions for all your shipments.
      </p>
    </div>
  );
}

function InfoCard({ icon, title, description }) {
  return (
    <div className="info-card">
       <img src={icon} alt={title} className="info-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


//continent section//

function Continent({ title }) {
  return (
    <div className="continent-card">
      <p>{title}</p>
    </div>
  );
}

function FooterLinks({ title, items }) {
  return (
<div>
  <h3>{title}</h3>
  {items.map((item) => (
    <p key={item.label}>
      <Link to={item.link} className="footer-link">
        {item.label}
      </Link>
    </p>
  ))}
</div>
  );
}

export default App;
