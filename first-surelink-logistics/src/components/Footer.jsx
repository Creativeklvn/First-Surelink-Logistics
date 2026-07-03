import { Link } from "react-router-dom";
import email from "/images/email.png";
import address from "/images/address.png";
import call from "/images/call.png";

function Footer() {
  return (
    <>
<footer className="footer">

  <FooterLinks
    title="Services"
    items={[
      { label: "Air Freight", link: "/air-freight" },
      { label: "Land Freight", link: "/land-freight" },
      { label: "Sea Freight", link: "/sea-freight" },
      { label: "Warehousing", link: "/warehousing" },
      { label: "Chemical Importation", link: "/chemical-importation" },
      
    ]}
  />

  <FooterLinks
    title="Route"
    items={[
      { label: "Africa", link: "/route-africa" },
      { label: "Europe", link: "/route-europe" },
      { label: "Asia", link: "/route-asia" },
      { label: "North America", link: "/route-northamerica" },
      { label: "South America", link: "/route-southamerica" },
    ]}
  />

  <FooterLinks
    title="Company"
    items={[
      { label: "About Us", link: "/about-us" },
      { label: "Tracking", link: "/tracking" },
      { label: "Global Reach", link: "/global-reach" },
      { label: "Industries Served", link: "/industries" },
      { label: "Contact Us", link: "/contact-us" },
      
    ]}
  />

  <FooterLinks
    title="Legal"
    items={[
      { label: "Privacy Policy", link: "/privacy-policy" },
      { label: "Terms and Conditions", link: "/terms-and-conditions" },
    ]}
  />

  <div className="footer-contact-wrapper">
    <div className="footer-logo">
      <img src="/images/logo3.png" alt="First Sure Link Logistics" />
    </div>

    <div className="contact-info">
      <div className="contact-item">
        
        <div className="contact-text">
          <Link to="/contact">(+234) 803 691 5391</Link>
          <Link to="/contact">(+234) 902 165 0864</Link>
          <Link to="/contact">(+234) 817 876 6130</Link>
        </div>
      </div>

      <div className="contact-item">
       
        <Link to="/contact">firstsurelink@gmail.com</Link>
      </div>

      <div className="contact-item">
        <Link to="/contact">4, Ashanti Close, Apapa, Lagos, Nigeria.</Link>
      </div>



    </div>
  </div>
</footer>
<section className="follow-up">
  <div className="follow">
    <h3>One Link, Endless Possibilities.</h3>

    <div className="follow-right">
      <h2>Follow Us:</h2>

      <a
        href="http://www.linkedin.com/in/firstsurelink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/linkedin.png"
          alt="First Sure Link Logistics LinkedIn"
        />
      </a>
    </div>
  </div>
</section>

<section className="footer-copyright">
  <small>
    © {new Date().getFullYear()} First Surelink Logistics Nig. Ltd. All Rights Reserved.
  </small>
</section>
</>
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

export default Footer;