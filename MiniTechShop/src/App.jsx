import './App.css'
import Hero from './staticPages/Hero.jsx';
import Footer from './staticPages/Footer.jsx';
import Navbar from './staticPages/Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import Products from './/products/Products.jsx';
import ProductDetails from './products/ProductDetails.jsx';
import Cart from './cart/Cart.jsx';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <Toaster 
        position="bottom-right" 
        reverseOrder={false} 
        toastOptions={{
          duration: 2000,
          style: {
            background: '#00796b',
            color: '#fff',
            fontWeight: 'bold',
          },
        }}
      />

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
