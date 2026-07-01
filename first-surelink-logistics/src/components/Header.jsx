import { useState } from "react";
import { Link } from "react-router-dom";



function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
const [companyOpen, setCompanyOpen] = useState(false);
  return (
    <>
<header className="header">
  <div className="logo">
    <img src="/images/logo2.PNG" alt="Sea freight" />
  </div>

  <nav className="nav">
    
    <Link to="/Home" className="nav-link">
      Home
    </Link>

    <Link to="/tracking" className="nav-link">
      Tracking
    </Link>

    <div className="dropdown">
      <span className="nav-link">Services ▾</span>

      <div className="dropdown-menu">
        <Link to="/sea-freight" className="dropdown-link">
          Sea Freight
        </Link>
        <Link to="/land-freight" className="dropdown-link">
          Land Freight
        </Link>
        <Link to="/air-freight" className="dropdown-link">
          Air Freight
        </Link>
        <Link to="/warehousing" className="dropdown-link">
          Warehousing
        </Link>
        <Link to="/customs-clearing" className="dropdown-link">
          Customs Clearing
        </Link>
      </div>
    </div>

    <div className="dropdown">
      <span className="nav-link">Company ▾</span>

      <div className="dropdown-menu">
        <Link to="/about-us" className="dropdown-link">
          About Us
        </Link>
        <Link to="/team" className="dropdown-link">
          Our Team
        </Link>
        <Link to="/global-reach" className="dropdown-link">
          Global Reach
        </Link>
        <Link to="/why-choose-us" className="dropdown-link">
          Why Choose Us
        </Link>
      </div>
    </div>
  </nav>

    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
</div>
</header>

    <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
  <Link className="mobile-item" to="/home">Home</Link>
  <Link className="mobile-item" to="/tracking">Tracking</Link>

  <div className="mobile-dropdown">
    <button
      className="mobile-item dropdown-btn"
      onClick={() => setServicesOpen(!servicesOpen)}
    >
      <span>Services</span>
      <span className={`arrow ${servicesOpen ? "open" : ""}`}>&gt;</span>
    </button>

    {servicesOpen && (
      <div className="dropdown-content">
        <Link to="/air-freight">Air Freight</Link>
        <Link to="/sea-freight">Sea Freight</Link>
        <Link to="/land-freight">Land Freight</Link>
      </div>
    )}
  </div>

  <div className="mobile-dropdown">
    <button
      className="mobile-item dropdown-btn"
      onClick={() => setCompanyOpen(!companyOpen)}
    >
      <span>Company</span>
      <span className={`arrow ${companyOpen ? "open" : ""}`}>&gt;</span>
    </button>

    {companyOpen && (
      <div className="dropdown-content">
        <Link to="/about-us">About Us</Link>
        <Link to="/global-reach">Global Reach</Link>
      </div>
    )}
  </div>

  <Link className="mobile-item" to="/about-us">About Us</Link>
  <Link className="mobile-item" to="/contact">Contact</Link>
</div>
    </>
  );
}

export default Header;