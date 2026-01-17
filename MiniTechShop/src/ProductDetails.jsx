import { useParams, Link } from "react-router-dom";
import "./productDetails.css";
import { products } from "./data/product.js";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <section className="details">
      <Link to="/products" className="back-btn">← Back</Link>

      <div className="details-card">
        <img src={product.img} alt={product.title} />

        <div className="details-info">
          <h1>{product.title}</h1>
          <p className="details-desc">{product.description}</p>
          <p className="details-price">{product.price}</p>
              <button
                className="buy-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  alert("Added to the cart!");
                }}
              >
                Buy
              </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
