import './App.css'
import Hero from './staticPages/Hero.jsx';
import Footer from './staticPages/Footer.jsx';
import Navbar from './staticPages/Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './productDetails.jsx';
import Cart from './Cart';

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />          
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
