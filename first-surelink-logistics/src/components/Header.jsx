import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
<header className="header">
  <div className="logo">
    <img src="/images/logo2.PNG" alt="Sea freight" />
  </div>

  <nav className="nav">
    
    <Link to="/Home.jsx" className="nav-link active">
      Home
    </Link>

    <Link to="/tracking" className="nav-link">
      Tracking
    </Link>

    <div className="dropdown">
      <span className="nav-link">Services ▾</span>

      <div className="dropdown-menu">
        <Link to="/seafreight" className="dropdown-link">
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
        <Link to="/about" className="dropdown-link">
          About Us
        </Link>
        <Link to="/team" className="dropdown-link">
          Our Team
        </Link>
        <Link to="/careers" className="dropdown-link">
          Careers
        </Link>
        <Link to="/news" className="dropdown-link">
          News & Updates
        </Link>
      </div>
    </div>
  </nav>

    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
</div>
</header>

    <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
      <Link className="mobile-item" to="/">Home</Link>
      <Link className="mobile-item" to="/tracking">Tracking</Link>
      <Link className="mobile-item" to="/seafreight">Sea Freight</Link>
      <Link className="mobile-item" to="/land-freight">Land Freight</Link>
      <Link className="mobile-item" to="/air-freight">Air Freight</Link>
      <Link className="mobile-item" to="/warehousing">Warehousing</Link>
      <Link className="mobile-item" to="/customs-clearing">Customs Clearing</Link>
      <Link className="mobile-item" to="/about">About Us</Link>
      <Link className="mobile-item" to="/contact">Contact</Link>
    </div>
    </>
  );
}

export default Header;