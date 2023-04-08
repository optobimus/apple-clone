import video from "../../static/airpods.mp4";
import thirdgen from "../../static/airpods_3rd_gen.jpg";
import secondgenleft from "../../static/2nd_gen.png";
import secondgenright from "../../static/2nd_gen_right.png";
import airpodsmax from "../../static/airpods_max.png";
import smallairpodsmaxcart from "../../static/airpods-max-cart.png";
import smallairpodsprocart from "../../static/airpods-pro-cart.png";
import smallairpodssecondcart from "../../static/airpods-2nd-cart.png";
import smallairpodsthirdcart from "../../static/airpods-3rd-cart.png";

import largeairpodsmaxcart from "../../static/airpods-max-cart.jpeg";
import largeairpodsprocart from "../../static/airpods-pro-cart.jpeg";
import largeairpodssecondcart from "../../static/airpods2-cart.jpeg";
import largeairpodsthirdcart from "../../static/airpods3-cart.jpeg";

import "../../styles/AirpodsMain.css"

function AirpodsMain({ clickHandler }) {

  const handleBuyClick = (name, smallImage, largeImage, price) => {
    clickHandler({ name: name, smallImage: smallImage, largeImage: largeImage, price: price});
  }

  return (
    <div className="airpods-main">
      <div className="airpods-video">
        
        <video autoPlay muted loop controls={false}>
          <source src={video} type="video/mp4" />
        </video>
        <div className="airpods-text">
            <h1>AirPods Pro</h1>
            <h2>$249</h2>
        </div>
        <div className="button-wrapper">
            <button onClick={() => handleBuyClick("Airpods Pro (2nd generation)", smallairpodsprocart, largeairpodsprocart, 249)} className="buy-button">Buy</button>
            <a className="learn-more-link">Learn more &gt;</a>
        </div>
      </div>


      <div className="airpods-3rd-gen">
        <img src={thirdgen} alt="3rdgen"></img>
        <div className="airpods-text">
            <h1>AirPods</h1>
            <h3>3rd generation</h3>
            <h2>From $169</h2>
        </div>
        <div className="button-wrapper">
            <button onClick={() => handleBuyClick("Airpods (3rd generation) with Lightning Charging Case", smallairpodsthirdcart, largeairpodsthirdcart, 169)} className="buy-button">Buy</button>
            <a className="learn-more-link">Learn more &gt;</a>
        </div>
      </div>

      <div className="airpods-2nd-gen">
        <div className="second-airpods-image-wrapper">
            <img id="left-airpod" src={secondgenleft} alt="2ndgenleft"></img>
            <img id="right-airpod" src={secondgenright} alt="2ndgenright"></img>

        </div>
        <div className="airpods-text">
            <h1>AirPods</h1>
            <h3>2nd generation</h3>
            <h2>$129</h2>
        </div>
        <div className="button-wrapper">
            <button onClick={() => handleBuyClick("Airpods (2nd generation)", smallairpodssecondcart, largeairpodssecondcart, 129)} className="buy-button">Buy</button>
            <a className="learn-more-link">Learn more &gt;</a>
        </div>
      </div>

      <div className="airpods-max">
        <img src={airpodsmax} alt="3rdgen"></img>
        <div className="airpods-text">
            <h1>AirPods Max</h1>
            <h2>$549</h2>
        </div>
        <div className="button-wrapper">
            <button onClick={() => handleBuyClick("Airpods Max", smallairpodsmaxcart, largeairpodsmaxcart, 549)} className="buy-button">Buy</button>
            <a className="learn-more-link">Learn more &gt;</a>
        </div>
      </div>
    </div>
  );
}

export default AirpodsMain;
