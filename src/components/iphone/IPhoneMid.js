import img from "../../static/homepage.jpg";
import "../../styles/IPhoneMid.css"
import cartImage from "../../static/iphone-14-pro-cart.png";

function IPhoneMid({ clickHandler }) {

  const handleBuyClick = () => {
    clickHandler({ name: "iPhone 14 Pro", image: cartImage, price: 1249});
  }
  return (
    <div className="iphone-mid-wrapper">
        <div className="copy-wrapper">
            <h2>iPhone 14 Pro</h2>
            <h1>Pro. Beyond.</h1>
            <h3>From $999 or $41.62/mo. for 24 mo. before trade‑in²</h3>
            <div className="button-wrapper">
                <button onClick={handleBuyClick} className="buy-button">Buy</button>
                <a className="learn-more-link">Learn more &gt;</a>
            </div>
        </div>
        <div className="image-wrapper">
            <img src={img} alt="homepageImage"></img>
        </div>
    </div>
  )
}

export default IPhoneMid;
