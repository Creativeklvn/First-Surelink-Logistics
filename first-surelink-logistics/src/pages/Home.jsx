import { useState, useRef } from "react";
import { Link } from "react-router-dom";


import "../App.css";

import globalIcon from "/images/global.png";
import partnershipIcon from "/images/partnership.png";
import insuranceIcon from "/images/insurance.png";


function Home() {


  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    videoRef.current.play();
    setPlaying(true);


  };

  return (

<>
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
          <Link to="/sea-freight" className="service-btn">
  Sea Freight Services
</Link>
        </div>
        <img src="/images/ship.jpg" alt="Sea freight" />
      </section>

      <section className="service blue">
        <img src="/images/truck.jpg" alt="Land freight" />
        <div>
          <h2>Land Freight</h2>
          <p>
            We provide reliable and efficient road transportation services for
            businesses and individuals.
          </p>
                    <Link to="/sea-freight" className="service-btn">
  Land Freight Services
</Link>
        </div>
      </section>

      <section className="service white">
        <div>
          <h2>Air Freight</h2>
          <p>
            First Sure Link Logistics provides fast, reliable, and efficient air
            freight services for businesses and individuals.
          </p>
                    <Link to="/sea-freight" className="service-btn">
  Air Freight Services
</Link>
        </div>
        <img src="/images/air.jpg" alt="Air freight" />
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


      <section className="reliable red">
        <div>
          <h2>Reliable Shipment Tracking</h2>
          <p>
            Monitor your shipments with confidence using First Sure Link
            Logistics. Our intelligent tracking platform gives you real-time
            visibility, shipment updates, document access, and delivery insights.
          </p>
          <button>Track made easy</button>
        </div>
        <img src="/images/map.png" alt="Air freight" />
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
    </>
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


export default Home;
