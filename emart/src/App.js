import './App.css';
import Header from './component/Header';
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About'
import Product from './component/Product'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import Checkout from './component/Checkout'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Product/>} />
        <Route exact path="/products/:id" element={<ProductDetail/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/checkout" element={<Checkout/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;