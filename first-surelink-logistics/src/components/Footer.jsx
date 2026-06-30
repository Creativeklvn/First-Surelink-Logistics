import { Link } from "react-router-dom";

import email from "/images/email.png";
import address from "/images/address.png";
import call from "/images/call.png";

function Footer() {
  return (
      <footer className="footer">
        <div>
        <div className="footer-logo">
    <img src="/images/logo2.PNG" alt="Sea freight" />
  </div>
          <h2>Get In Touch</h2>
<div className="contact-info">
  <div className="contact-item">
    <img src={call} alt="Phone" className="contact-icon" />
      <div className="contact-text">
    <Link to="/contact">+234 803 691 5391</Link>
    <Link to="/contact">+234 902 165 0864</Link>
    <Link to="/contact">+234 817 876 6130</Link>
  </div>
</div>

<div className="contact-item">
  <img src={email} alt="Email" className="contact-icon" />
  <Link to="/contact">firstsurelink@gmail.com</Link>
</div>

<div className="contact-item">
  <img src={address} alt="Location" className="contact-icon" />
  <Link to="/contact">
    4, Ashanti Close, Apapa, Lagos, Nigeria
  </Link>
  </div>
</div>
        </div>

<FooterLinks
  title="Services"
  items={[
    { label: "Air Freight", link: "/airfreight" },
    { label: "Land Freight", link: "/landfreight" },
    { label: "Sea Freight", link: "/seafreight" },
    { label: "Warehousing", link: "/warehousing" },
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
    { label: "Contact Us", link: "/contact" },
    { label: "Global Reach", link: "/global-reach" },
    { label: "Privacy Policy", link: "/privacy-policy" },
    { label: "Terms and Conditions", link: "/terms-and-conditions" },
  ]}
/> </footer>

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