import logo from './logo.svg';

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import Homepage from './components/homepage/Homepage';
import Banner from './components/homepage/Banner';
import Colors from './components/homepage/Colors';
import Watchpreview from './components/homepage/Watchpreview';
import Footer from "./components/Footer";
import CartPreview from "./components/cart/CartPreview";

import IPhoneBanner from './components/iphone/IPhoneBanner';
import IPhoneHero from './components/iphone/IPhoneHero';
import IPhoneMid from './components/iphone/IPhoneMid';

import Airpodsbanner from './components/airpods/Airpodsbanner';
import AirpodsMain from './components/airpods/AirpodsMain';

function App() {

  const [items, setItems] = useState([]);

  const clickBagHandler = (event) => {
    event.preventDefault();
    const bagPreview = document.querySelector(".cart-preview");
    const nav = document.querySelector(".navbar");
    if (bagPreview?.classList.contains("active")) {
      bagPreview.classList.remove("active");
      nav.classList.remove("active-cart");
    } else {
      bagPreview?.classList.add("active");
      nav.classList.add("active-cart");
    }
  }

  const handleAddToCart = (item) => {
    setItems(prevItems => [...prevItems, item]);
  }

  return (
    <>
      <Nav onClickBag={clickBagHandler} itemsInCart={items.length}/>
      <CartPreview items={items}/>
      <Routes>
        <Route path="/" element={
          <>
            <Banner/>
            <Homepage/>
            <Colors/>
            <Watchpreview/>
          </>
        }/>
        <Route path="/iphone" element={
          <>
            <IPhoneBanner/>
            <IPhoneHero clickHandler={handleAddToCart}/>
            <IPhoneMid clickHandler={handleAddToCart}/>
          </>
        }/>
        <Route path="/airpods" element={
          <>
            <Airpodsbanner/>
            <AirpodsMain clickHandler={handleAddToCart}/>
          </>
        }/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
