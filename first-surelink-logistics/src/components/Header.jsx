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
    
    <Link to="/Home" className="nav-link">
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
        <Link to="/landfreight" className="dropdown-link">
          Land Freight
        </Link>
        <Link to="/airfreight" className="dropdown-link">
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
      <Link className="mobile-item" to="/Home">Home</Link>
      <Link className="mobile-item" to="/tracking">Tracking</Link>
      <Link className="mobile-item" to="/seafreight">Sea Freight</Link>
      <Link className="mobile-item" to="/landfreight">Land Freight</Link>
      <Link className="mobile-item" to="/airfreight">Air Freight</Link>
      <Link className="mobile-item" to="/warehousing">Warehousing</Link>
      <Link className="mobile-item" to="/customs-clearing">Customs Clearing</Link>
      <Link className="mobile-item" to="/about-us">About Us</Link>
      <Link className="mobile-item" to="/contact">Contact</Link>
    </div>
    </>
  );
}

export default Header;