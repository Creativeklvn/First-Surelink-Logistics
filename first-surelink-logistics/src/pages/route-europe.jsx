import "../css/route.css";

function RouteEurope() {
  return (
    <main className="page">
      <section className="page-europe">
        <section className="hero-content fade-right-now">
        <div className="page-hero-content">
          <h1>Europe</h1>
          <p>Whether importing or exporting, we simplify shipping to and from North America.</p>
        </div>
      </section>
</section>
      <div className="red-bar"></div>

      <section className="page-content">
<h2>
  Europe Freight and Logistics Solutions
</h2>

<p>
  Europe is one of the world's leading trade regions, and First SureLink Logistics helps businesses 
  and individuals move cargo with confidence. We provide efficient freight solutions that connect European 
  markets with destinations around the globe.
</p>

<p>
  Whether your shipment is moving by air, land, or sea, our team coordinates every stage of the 
  logistics process to ensure smooth transportation, accurate documentation, and timely delivery. 
  We work closely with trusted logistics partners to keep your cargo moving without unnecessary delays.
</p>

<p>
  From retail products and industrial equipment to personal belongings, we offer flexible shipping solutions 
  tailored to your requirements. Our goal is to simplify international shipping while delivering a seamless 
  logistics experience across Europe.
</p>

<h3>Comprehensive Freight Services Across Europe</h3>

<p>
  Our transportation network covers major European cities, ports, 
  and distribution hubs, providing businesses with efficient cargo 
  movement and dependable supply chain support throughout the region.
</p>
      </section>

    <section className="air">
  <div className="air-solutions">

    <div className="air-header">
      
    </div>

    <div className="air-grid">

      <div className="air-card">
        <img src="/images/plane-icon.png"alt="Air Transport"className="transport-icon"/>
  <h3>Air Transport in Asia</h3>
  <p>
    Keep your business moving with fast air cargo services connecting Asia's busiest airports. 
    Ideal for urgent, high-value, and time-sensitive shipments.
  </p>
</div>

<div className="air-card">
  <img src="/images/truck-icon.png" alt="Land Transport" className="transport-icon" />
  <h3>Land Transport in Asia</h3>
  <p>
    Our road transport network supports the movement of goods across key trade corridors, 
    helping businesses move cargo efficiently between cities and neighboring countries.
  </p>
</div>

<div className="air-card">
  <img src="/images/ship-icon.png" alt="Sea Transport" className="transport-icon" />
  <h3>Sea Transport in Asia</h3>
  <p>
    We handle ocean freight through major Asian ports, offering flexible shipping options 
    for everything from containerized cargo to large commercial consignments.
  </p>
</div>
    </div>

  </div>
</section>

    </main>
  );
}

export default RouteEurope;