import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import Homepage from './components/homepage/Homepage';
import Banner from './components/homepage/Banner';
import Colors from './components/homepage/Colors';
import Watchpreview from './components/homepage/Watchpreview';
import Footer from "./components/Footer";
import CartPreview from "./components/CartPreview";

import IPhoneBanner from './components/iphone/IPhoneBanner';
import IPhoneHero from './components/iphone/IPhoneHero';
import IPhoneMid from './components/iphone/IPhoneMid';

import Airpodsbanner from './components/airpods/Airpodsbanner';
import AirpodsMain from './components/airpods/AirpodsMain';

function App() {

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

  return (
    <>
      <Nav onClickBag={clickBagHandler}/>
      <CartPreview/>
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
            <IPhoneHero/>
            <IPhoneMid/>
          </>
        }/>
        <Route path="/airpods" element={
          <>
            <Airpodsbanner/>
            <AirpodsMain/>
          </>
        }/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
