
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavbarNew from './components/NavbarNew';
// import ProductCard from './components/ProductCard';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import About from './components/Footer';  
import Footer from './components/Footer';

function App() {
  return (

    <>
      <CartProvider>
        <Router>
          <NavbarNew />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/productcard/:id" element={<ProductCard />} /> */}
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
        <Footer/>
      </CartProvider>
    </>
  );
}

export default App;
