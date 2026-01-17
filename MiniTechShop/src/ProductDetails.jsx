import { useParams, Link } from "react-router-dom";
import "./productDetails.css";

const products = [
  {
    id: 1,
    title: "Controller for PS5",
    price: "$69.99",
    img: "https://cdn.ozone.bg/media/catalog/product/k/o/kontroler_dualsense_edge_wireless_controller_1673274086_0.jpg",
  },
  {
    id: 2,
    title: "Gaming mouse Razer",
    price: "$59.99",
    img: "https://laptop.bg/system/images/189888/original/RZ0102540100R3M1.jpg",
  },
  {
    id: 3,
    title: "Gaming keyboard Logitech",
    price: "$89.99",
    img: "https://m.media-amazon.com/images/I/51K1mE5uVyL._AC_UF894,1000_QL80_.jpg",
  },
    {
    id: 4,
    title: "Gaming keyboard Razer",
    price: "$89.99",
    img: "https://m.media-amazon.com/images/I/71sXzUqI9XL._AC_UF894,1000_QL80_.jpg",
  },
    {
    id: 5,
    title: "Gaming headset HyperX",
    price: "$89.99",
    img: "https://m.media-amazon.com/images/I/71ltsViEA8L._AC_UF894,1000_QL80_.jpg",
  },
];

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
          <p className="details-price">{product.price}</p>
          <p className="details-desc">{product.description}</p>

          <button className="buy-btn">
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
