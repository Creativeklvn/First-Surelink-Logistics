import { Link } from "react-router-dom";
import "../css/route.css";

function GlobalReach() {
  return (
    <main className="page">
      <section className="page-global">
        <div className="page-hero-content">
          <h1>Our Global Reach</h1>
          <p>Supporting global trade with efficient logistics and freight forwarding.</p>
        </div>
      </section>

      <div className="red-bar"></div>

      <section className="page-content">
        <h2>
          Connecting businesses across continents with reliable freight forwarding and logistics solutions
        </h2>

        <p>
        First Sure Link Logistics connects businesses and individuals to destinations 
        around the world through a reliable network of international shipping partners 
        and logistics providers. Our global reach enables us to deliver seamless freight 
        forwarding solutions across major trade routes, ensuring cargo moves efficiently 
        from origin to destination.
        </p>

        <p>
        We provide comprehensive logistics services throughout Africa, Asia, Europe, North America, 
        and South America, supporting both import and export operations for businesses of all sizes. 
        Whether transporting commercial goods, industrial equipment, 
        vehicles, or personal effects, we deliver dependable solutions tailored to each shipment.
        </p>

        <p>
        By combining local expertise with a strong international network, we simplify cross-border shipping, 
        customs processes, and cargo handling while maintaining high standards of safety, efficiency, and transparency. 
        No matter where your business operates, First Sure Link Logistics is committed to keeping your supply chain 
        connected and your shipments moving with confidence.
        </p>
        
        <p>
  Talk to our team:{" "}
  <Link to="/contact" className="contact-link">
    firstsurelink@gmail.com
  </Link>
</p>
      </section>

<section className="air">
  <div className="air-solutions">

    <div className="air-header">
      
    </div>

    <div className="air-grid">

      <div className="air-card">
        <img src="/images/plane-icon.png"alt="Air Transport"className="transport-icon"/>
        <h3>Air Transport in Africa</h3>
          <p>
    Fast and efficient air freight solutions for cargo moving across Africa. We ensure secure handling, 
    smooth logistics, and timely delivery for every shipment.
  </p>
      </div>

      <div className="air-card">
        <img src="/images/truck-icon.png"alt="Air Transport"className="transport-icon"/>
        <h3>Land Transport in Africa</h3>
         <p>
    Comprehensive road freight services connecting businesses and communities across Africa with safe, 
    efficient, and dependable cargo transportation.
  </p>
      </div>

      <div className="air-card">
        <img src="/images/ship-icon.png"alt="Air Transport"className="transport-icon"/>
        <h3>Sea Transport in Africa</h3>
          <p>
    Cost-effective sea freight solutions through Africa's major ports, ensuring smooth cargo movement, 
    secure handling, and efficient delivery.
  </p>
      </div>
    </div>

  </div>
</section>

<section className="page-globalreach"></section>



    </main>
  );
}

export default GlobalReach;