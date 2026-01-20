import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <h2>Welcome to Mini Tech Shop</h2>

      <p>
        Discover the latest and greatest tech gadgets at unbeatable prices –
        only at Mini Tech Shop!
      </p>

      <Link to="/products" className="hero-link">
        <button>Show products</button>
      </Link>
    </section>
  );
};

export default Hero;
