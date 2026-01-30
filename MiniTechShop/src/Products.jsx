import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./products.css";
import { products } from "./data/product.js";
import { useCart } from "./context/cartContext.jsx"; 

const Products = () => {
  const { addToCart } = useCart();

  return (
    <>
    <section className="products">
      <h2>Products</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={`/product/${product.id}`} className="product-link">
              <article className="product-card">
                <img src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="price">€{product.price}</p>

                <button
                  className="buy-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product); 
                  }}
                >
                  Buy
                </button>
              </article>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <section className="products-grid">
        {products.map((product) => (
            <Link to={`/product/${product.id}`} className="product-link">
              <article className="product-card">
                <img src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="price">€{product.price}</p>
              </article>
            </Link>
        ))}
    </section>
    </>
  );
};

export default Products;
