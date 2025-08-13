import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Cart from './pages/Cart';
import Backend from './pages/Backend';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import { AboutProvider } from './context/AboutContext';

function App() {
  return (
    <AboutProvider>
      <ProductProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/backend-management" element={<Backend />} />
              </Routes>
            </div>
          </Router>
        </CartProvider>
      </ProductProvider>
    </AboutProvider>
  );
}

export default App;