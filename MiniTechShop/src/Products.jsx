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
          <h3>Контролер за PS5</h3>
        </article>

        <article className="product-card">
          <img
            src="https://cdn.ozone.bg/media/catalog/product/k/o/kontroler_dualsense_edge_wireless_controller_1673274086_0.jpg"
            alt="PS5 Controller"
          />
          <h3>Контролер за PS5</h3>
        </article>

        <article className="product-card">
          <img
            src="https://cdn.ozone.bg/media/catalog/product/k/o/kontroler_dualsense_edge_wireless_controller_1673274086_0.jpg"
            alt="PS5 Controller"
          />
          <h3>Контролер за PS5</h3>
        </article>
      </div>
    </section>
  );
};

export default Products;
