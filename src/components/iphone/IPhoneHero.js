import img from "../../static/iphone-14-colors.png";
import "../../styles/IPhoneHero.css"
import smallImage from "../../static/iphone-14-cart.png";
import largeImage from "../../static/iphone-14-cart.jpeg";

function IPhoneHero({ clickHandler }) {

  const handleBuyClick = () => {
    clickHandler({ name: "iPhone 14", smallImage: smallImage, largeImage: largeImage, price: 849});
  }

  return (
    <div className="iphone-hero-wrapper">
        <div className="copy-wrapper">
            <p>New</p>
            <h4>iPhone 14</h4>
            <h1>Two great sizes.</h1>
            <h1>Now with a splash of yellow.</h1>
            <h3>From $799 or $33.29/mo. for 24 mo. before trade-in²</h3>
            <div className="button-wrapper">
              <button onClick={handleBuyClick} className="buy-button">Buy</button>
              <a className="learn-more-link">Learn more &gt;</a>
                
            </div>
                
        </div>
        <div className="image-wrapper">
            <img src={img} alt="colorImage"></img>
        </div>
    </div>
  )
}

export default IPhoneHero;
