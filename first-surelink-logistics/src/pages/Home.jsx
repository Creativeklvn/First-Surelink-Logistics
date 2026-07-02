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
          <div className="hero-p">
          <p>
            Delivering comprehensive logistics services, 
            from import and export to customs clearing and freight forwarding.
          </p>
          </div>
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
                    <Link to="/land-freight" className="service-btn">
  Land Freight Services
</Link>
        </div>
      </section>

      <section className="service white">
        <div>
          <h2>Air Freight</h2>
          <p>
            First Surelink Logistics provides fast, reliable, and efficient air
            freight services for businesses and individuals.
          </p>
                    <Link to="/air-freight" className="service-btn">
  Air Freight Services
</Link>
        </div>
        <img src="/images/air.jpg" alt="Air freight" />
      </section>


      <section className="features">
  <Feature
    icon={partnershipIcon}
    title="Flexiblibity"
    description="At First Surelink Logistics, we understand that every shipment is unique."
  />

  <Feature
    icon={globalIcon}
    title="Added Values"
    description="We have various service options that complement your supply chain."
  />

  <Feature
    icon={insuranceIcon}
    title="Across Every Route"
    description="Our integrated transportation services make it easy to move 
    cargo by air, sea, and road locally and internationally."
  />

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
            Monitor your shipments with confidence using First Surelink
            Logistics. Our intelligent tracking platform gives you real-time
            visibility, shipment updates, document access, and delivery insights.
          </p>
           <Link to="/tracking" className="reliable-btn">
  Track made easy</Link>
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
    description="At First Surelink Logistics, we work closely with 
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

<section className="flow-section">
<div className="flow-sectio">
  <div className="flow-heading">
     <h3>CAPABILITY</h3>
    <h2>Making Global Logistics Simple</h2>
  </div>

  <div className="flow-content">
    <p>
      We simplify the movement of goods by combining industry expertise, smart
      planning, and dependable execution. Our focus is on helping businesses
      and individuals move cargo efficiently while delivering solutions that
      support growth and long-term success.
    </p>
  </div>
  </div>
</section>
    </>
  );
}

function Feature({ icon, title, description }) {
  return (
     <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
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
