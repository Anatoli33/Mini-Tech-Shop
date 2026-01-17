import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./products.css";

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

const Products = () => {
  return (
    <section className="products">
      <h2>Products</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true
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
              <p className="price">{product.price}</p>
              <button className="buy-btn">Buy</button>
            </article>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;
