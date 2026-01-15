import './App.css'
import Hero from './Hero';
import Footer from './Footer';
import Navbar from './Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import Products from './Products';

function App() {


  return (
    
    <div className='app-layout'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
