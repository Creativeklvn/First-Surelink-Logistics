import { Link } from "react-router-dom";
import "../css/route.css";

function WhyChooseUs() {
  return (
    <main className="page">
      <section className="page-global">
        <div className="page-hero-content">
          <h1>Why Choose Us</h1>
          <p>Experience the First Surelink Difference</p>
        </div>
      </section>

      <div className="red-bar"></div>

      <section className="page-content">
        <h2>
          The Right Partner for Every Shipment
        </h2>

        <p>
  At First Sure Link Logistics, we do more than move cargo—we provide
  logistics solutions designed to keep your business running smoothly. Every
  shipment is carefully planned and managed to ensure efficient transportation
  from origin to destination, with close attention to every stage of the
  shipping process.
</p>

<p>
  Our experienced team works with trusted shipping lines, airlines, transport
  providers, and customs authorities to simplify both domestic and
  international freight. From documentation and customs clearance to cargo
  handling and final delivery, we offer professional service, clear
  communication, and tailored logistics solutions that make shipping simple,
  efficient, and stress-free.
</p>

<h3>Dependable Performance</h3>
<p>
  Every shipment is planned with care to help ensure your cargo moves smoothly
  from collection to final destination, meeting your shipping requirements
  every step of the way.
</p>

<h3>Worldwide Connections</h3>
<p>
  Through our extensive international partnerships, we connect businesses to
  major trade routes and markets across multiple continents with confidence.
</p>

<h3>Solutions That Fit Your Needs</h3>
<p>
  We understand that every shipment has different priorities, so we develop
  logistics plans that match your cargo, budget, schedule, and business goals.
</p>

<h3>Industry Knowledge</h3>
<p>
  Our team brings practical experience and in-depth knowledge of freight
  forwarding, helping you navigate shipping requirements with confidence.
</p>

<h3>Open Communication</h3>
<p>
  We keep you informed throughout the shipping process with clear updates and
  prompt responses, so you're never left wondering about the status of your
  cargo.
</p>

<h3>Careful Cargo Management</h3>
<p>
  From loading to final delivery, every shipment is handled with attention to
  detail to help protect your goods throughout transit.
</p>

<h3>Cost-Conscious Shipping</h3>
<p>
  We focus on practical shipping options that help you control logistics costs
  while maintaining high standards of service.
</p>

<h3>Support You Can Count On</h3>
<p>
  We work closely with every client, providing guidance, timely assistance,
  and practical solutions to help every shipment move forward without
  unnecessary complications.
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

export default WhyChooseUs;