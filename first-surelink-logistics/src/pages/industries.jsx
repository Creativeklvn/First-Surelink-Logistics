import { Link } from "react-router-dom";
import "../css/route.css";

function Industries() {
  return (
    <main className="page">
      <section className="page-chemical">
        <div className="page-hero-content">
          <h1>Industries Served</h1>
          <p>Trusted global suppliers.</p>
        </div>
      </section>

      <div className="red-bar"></div>

      <section className="page-content">
        <h2>
            Delivering quality chemical products to multiple industry sectors.
        </h2>

<section className="sector-section">


  <div className="sector-grid">
    <div className="sector-item">
      <img src="/images/5.png" alt="Manufacturing" />
      <h3>Manufacturing</h3>
    </div>

    <div className="sector-item">
      <img src="/images/3.png" alt="Agriculture" />
      <h3>Agriculture</h3>
    </div>

    <div className="sector-item">
      <img src="/images/6.png" alt="Construction" />
      <h3>Construction</h3>
    </div>

    <div className="sector-item">
      <img src="/images/1.png" alt="Automotive" />
      <h3>Automotive</h3>
    </div>

    <div className="sector-item">
      <img src="/images/2.png" alt="Chemicals" />
      <h3>Chemicals</h3>
    </div>

    <div className="sector-item">
      <img
        src="/images/4.png"
        alt="Household & Commercial Kitchen Equipment"
      />
      <h3>Household & Commercial Kitchen Equipment</h3>
    </div>
  </div>
</section>

</section>


    </main>
  );
}

export default Industries;