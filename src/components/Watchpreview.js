import img from "../static/apple-watch.png";
import logo from "../static/logo.png";
import "../styles/Watchpreview.css"

function Watchpreview() {
  return (
    <div className="watchpreview-wrapper">
        <div className="copy-wrapper">
            <h1>
                <img src={logo} alt="logo"></img>
                WATCH
            </h1>
            <p>SERIES 8</p>
            <h3>A healthy leap ahead.</h3>
            <div className="button-wrapper">
                <a className="learn-more-link">Learn more &gt;</a>
                <a className="buy-link">Buy &gt;</a>
            </div>
        </div>
        <div className="image-wrapper">
            <img src={img} alt="watchpreviewImage"></img>
        </div>
    </div>
  )
}

export default Watchpreview;
