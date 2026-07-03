import { Link } from "react-router-dom";
import "../css/freight.css";

function Tracking() {
  return (
    <main className="page">
      <section className="page-tracking">
        <section className="hero-content fade-right-now">
        <div className="page-hero-content">
          <h1>Tracking</h1>
          <p>Know where your shipment is, anytime.</p>
        </div>
      </section>
      </section>

      <div className="red-bar"></div>

      <section className="tracking-page">
         <div className="tracking-pag">
        <h2>Tracking</h2>
        <p>Enter a Container / Booking- or B/L-Number</p>
        <div className="tracking-box-page">
          <input placeholder="Container / Booking- or B/L-Number" />
          <button>Track</button>
        </div>
        </div>
      </section> 

      <section className="page-tra">
        
      </section>

<section className="support-section">
  <div className="support-content">
    <h2>Need Additional Help?</h2>

    <p className="support-subtitle">
      Explore our support resources and find the assistance you need.
    </p>

    <p className="support-text">
      Access our self-service support, get in touch with our customer support team for personalized
      assistance.
    </p>

    <Link to="/contact" className="support-btn">
      Get Support
    </Link>
  </div>
</section>

    </main>
  );
}

export default Tracking;