import img from "../../static/homepage.jpg";
import "../../styles/Homepage.css"

function Homepage() {
  return (
    <div className="homepage-wrapper">
        <div className="copy-wrapper">
            <h1>iPhone 14 Pro</h1>
            <h3>Pro. Beyond.</h3>
            <div className="button-wrapper">
                <a className="learn-more-link">Learn more &gt;</a>
                <a className="buy-link">Buy &gt;</a>
            </div>
        </div>
        <div className="image-wrapper">
            <img src={img} alt="homepageImage"></img>
        </div>
    </div>
  )
}

export default Homepage;
