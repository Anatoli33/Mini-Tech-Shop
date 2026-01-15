import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <h2>Добре дошъл в Mini Tech Shop</h2>

      <p>
        Открий най-новите и качествени технологични джаджи на страхотни цени –
        само в Mini Tech Shop!
      </p>

      <Link to="/products" className="hero-link">
        <button>Виж продукти</button>
      </Link>
    </section>
  );
};

export default Hero;
