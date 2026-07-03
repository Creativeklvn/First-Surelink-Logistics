import { Link } from "react-router-dom";
import "../css/route.css";

function Warehousing() {
  return (
    <main className="page">
      <section className="page-warehouse">
        <div className="page-hero-content">
          <h1>Warehousing</h1>
          <p>Efficient storage and distribution services you can trust.</p>
        </div>
      </section>

      <div className="red-bar"></div>

      <section className="page-content">
      <h2>Keeping your goods secure until they are ready to move.</h2>

<p>
  First Sure Link Logistics provides secure and flexible warehousing solutions
  designed to support businesses of all sizes. Our storage facilities are
  strategically managed to ensure your goods remain safe, organized, and ready
  for timely distribution whenever required.
</p>

<p>
  Whether you require short-term storage, long-term warehousing, inventory
  management, or distribution support, our experienced team ensures your cargo
  is handled with care and efficiency. We help streamline your supply chain by
  providing reliable storage solutions that improve inventory control and
  facilitate faster order fulfillment.
</p>

<h3>Warehousing Services</h3>

<ul className="applications">
  <li><img src="/images/check.png" alt="" /> Short-Term Storage</li>
  <li><img src="/images/check.png" alt="" /> Long-Term Storage</li>
  <li><img src="/images/check.png" alt="" /> Inventory Management</li>
  <li><img src="/images/check.png" alt="" /> Cargo Handling</li>
  <li><img src="/images/check.png" alt="" /> Order Fulfillment</li>
  <li><img src="/images/check.png" alt="" /> Distribution Services</li>
  <li><img src="/images/check.png" alt="" /> Secure Storage Facilities</li>
</ul>
</section>


    </main>
  );
}

export default Warehousing;