import { Link } from "react-router-dom";
import "../css/why.css";

function ContactUs() {
  return (
    <main className="page">
      <section className="page-contact">
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>For further information regarding our services, 
            for booking enquires or to receive a quick-response quotation, please see our contact details below.</p>
        </div>
      </section>

      <div className="red-bar"></div>

      <section className="contact-section">

  <div className="contact-card">
    <h2>Give us a call</h2>

    <p className="contact-description">
      Want to speak to someone? Our customer service team are happy to help.
    </p>

<div className="contact-details">
  <Link to="tel:+2348036915391" className="contact-detail">
    +234 803 691 5391
  </Link>

  <Link to="tel:+2349021650864" className="contact-detail">
    +234 902 165 0864
  </Link>

  <Link to="tel:+2348178766130" className="contact-detail">
    +234 817 876 6130
  </Link>
</div>

    <div className="contact-option">
      <div className="icon-circle">
        <img
          src="/images/call.png"
          alt="Phone"
          className="contact-img"
        />
      </div>

      <span className="contact-label">CALL US</span>
    </div>
  </div>

  <hr className="contact-divider" />

  <div className="contact-card">
    <h2>Send us an Email</h2>

    <p className="contact-description">
      Drop us a note and we'll get back to you.
    </p>

<div className="contact-details">
  <Link to="mailto:firstsurelink@gmail.com" className="contact-detail">
    firstsurelink@gmail.com
  </Link>
  </div>

    <div className="contact-option">
      <div className="icon-circle">
        <img
          src="/images/email.png"
          alt="Email"
          className="contact-img"
        />
      </div>

      <span className="contact-label">EMAIL US</span>
    </div>
  </div>
  

  <hr className="contact-divider" />

  <div className="contact-card">
    <h2>Visit Our Office</h2>

    <p className="contact-description">
      Walk into our office during business hours.
    </p>

    <p className="contact-details">
      4 Sapri Close, Apapa, Lagos, Nigeria
    </p>

    <div className="contact-option">
      <div className="icon-circle">
        <img
          src="/images/address.png"
          alt="Location"
          className="contact-img"
        />
      </div>

      <span className="contact-label">WALK IN</span>
    </div>
  </div>

</section>


    </main>
  );
}

export default ContactUs;