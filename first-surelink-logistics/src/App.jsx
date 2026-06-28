import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">LOGO</div>

        <nav className="nav">
          <a className="active">Home</a>
          <a>Tracking</a>

          <div className="dropdown">
            <a>Services ▾</a>
            <div className="dropdown-menu">
              <a>Sea Freight</a>
              <a>Land Freight</a>
              <a>Air Freight</a>
              <a>Warehousing</a>
              <a>Customs Clearing</a>
            </div>
          </div>

          <div className="dropdown">
            <a>Company ▾</a>
            <div className="dropdown-menu">
              <a>About Us</a>
              <a>Our Team</a>
              <a>Careers</a>
              <a>News & Updates</a>
            </div>
          </div>
        </nav>

        <div className="menu-icon">☰</div>
      </header>

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

      <section className="tagline">
        <h2>Wherever Life Takes You, First Sure Link Delivers</h2>
        <p>
          Let First Sure Link Logistics handle your shipping and logistics while
          you focus on what matters most.
        </p>
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

      <section className="smart-logistics">
        <h2>Connecting Global Trade Through Smarter Logistics.</h2>

        <div className="smart-grid">
          <InfoCard title="Global Carrier Partnerships" />
          <InfoCard title="Global Shipping Network" />
          <InfoCard title="Cargo Insurance" />
        </div>
      </section>

      <footer className="footer">
        <div>
          <div className="footer-logo">ICON</div>
          <h2>First Sure Link Logistics</h2>
          <p>081111818</p>
          <p>firstsurelink@gmail.com</p>
          <p>Address:</p>
        </div>

        <FooterLinks title="Services" items={["Air Freight", "Land Freight", "Sea Freight", "Warehousing"]} />
        <FooterLinks title="Route" items={["Africa", "Europe", "Asia", "North America", "South America"]} />
        <FooterLinks title="Company" items={["About Us", "Tracking", "Contact Us", "Privacy Policy", "Terms and Condition"]} />
      </footer>
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

function InfoCard({ title }) {
  return (
    <div className="info-card">
      <div className="icon dark">📍</div>
      <h3>{title}</h3>
      <p>
        At First Sure Link Logistics, we work closely with trusted partners to
        deliver reliable and cost-effective logistics solutions for every
        shipment.
      </p>
    </div>
  );
}

function FooterLinks({ title, items }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default App;
