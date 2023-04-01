import video from "../../static/airpods.mp4"
import thirdgen from "../../static/airpods_3rd_gen.jpg"

import "../../styles/AirpodsMain.css"

function AirpodsMain() {
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
            <button className="buy-button">Buy</button>
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
            <button className="buy-button">Buy</button>
            <a className="learn-more-link">Learn more &gt;</a>
        </div>
      </div>
    </div>
  );
}

export default AirpodsMain;
