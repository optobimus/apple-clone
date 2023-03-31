import img from "../static/iphone-14-colors.png";
import "../styles/Colors.css"

function Colors() {
  return (
    <div className="colors-wrapper">
        <div className="copy-wrapper">
            <h1>iPhone 14</h1>
            <h3>Two great sizes.</h3>
            <h3>Now with a splash of yellow.</h3>
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

export default Colors;
