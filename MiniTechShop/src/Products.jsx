import "./products.css";

const Products = () => {
  return (
    <section className="products">
      <h2>Products</h2>

      <div className="products-grid">
        <article className="product-card">
          <img
            src="https://cdn.ozone.bg/media/catalog/product/k/o/kontroler_dualsense_edge_wireless_controller_1673274086_0.jpg"
            alt="PS5 Controller"
          />
          <h3>Controller for PS5</h3>
          <p className="price">$69.99</p>
          <button className="buy-btn">Buy</button>
        </article>

        <article className="product-card">
          <img
            src="https://laptop.bg/system/images/189888/original/RZ0102540100R3M1.jpg"
            alt="Gaming mouse"
          />
          <h3>Gaming mouse Razer</h3>
          <p className="price">$59.99</p>
          <button className="buy-btn">Buy</button>
        </article>

        <article className="product-card">
          <img
            src="https://m.media-amazon.com/images/I/51K1mE5uVyL._AC_UF894,1000_QL80_.jpg"
            alt="Gaming keyboard"
          />
          <h3>Gaming keyboard Logitech</h3>
          <p className="price">$89.99</p>
          <button className="buy-btn">Buy</button>
        </article>
      </div>
    </section>
  );
};

export default Products;
