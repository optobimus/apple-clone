
import "../../styles/CartReview.css"
import { useState, useEffect } from "react";

function CartReviewItem({ item }) {

  const [itemSelector, setItemSelector] = useState(null);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    getAmount();
  });

  const getAmount = () => {
    const amountSelectors = document.querySelectorAll(".item-select");
    amountSelectors.forEach(selector => {
      if(selector.parentNode.previousSibling.firstChild.textContent === item.name) {
        setItemSelector(selector);
      }
    });
    setAmount(itemSelector?.value);
  }

  return (
    <div className="cart-review-item">
        <img className="cart-image-large" src={item.largeImage}></img>
        <div className="item-info">
            <div className="info-header">
              <div className="info-header-1">
                <h2>{item.name}</h2>
                <p>Pay 0% APR for 6 months:</p>
              </div>
              <div className="info-header-2">
                <select className="item-select" onChange={getAmount}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10+</option>
                </select>
              </div>
              <div className="info-header-3">
                <h2>${item.price*amount}</h2>
                <p>${item.price/6}/mo.</p>
                <a>Remove</a>
              </div>
            </div>
            <div className="info-hero">
              <div className="hero-logo">
                <img width="400" height="400" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/APPLECARE-plus_ICON?" srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/APPLECARE-plus_ICON?, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/APPLECARE-plus_ICON? 2x" aria-hidden="true"/>
              </div>
              <div className="hero-text">
                  <h3>Add AppleCare+ for {item.name} for ${item.price/10}</h3>
                  <p>Get up to two years of unlimited repairs for accidental damage protection and additional tech support</p>
                  <a className="hero-text-learn-more">Learn more &gt;</a>
                </div>
                <a className="add-link">Add</a>
            </div>
            <div className="info-mid">
              <svg viewBox="0 0 25 25" class="as-svgicon as-svgicon-engraving as-svgicon-reduced as-svgicon-engravingreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M12.5 22.05a9.55 9.55 0 119.55-9.55 9.561 9.561 0 01-9.55 9.55zm0-18a8.45 8.45 0 108.45 8.45 8.46 8.46 0 00-8.45-8.45z"></path><path d="M16.5 15h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18 11H7a.5.5 0 010-1h11a.5.5 0 010 1z"></path></svg>
              <h3>Add free engraving</h3>
              <a className="add-link">Add</a>
            </div>
            <div className="info-low">
              <div className="info-low-upper">
                <h3>Find out how soon you can get this item.</h3>
                <a className="zip-code-link">Enter zip code &#x25BC;</a>
              </div>
              <div className="info-low-lower">
                <p>
                  <svg viewBox="0 0 25 25" class="as-svgicon as-svgicon-shipping as-svgicon-reduced as-svgicon-shippingreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M19.69 7.154l-6-3.245a2.5 2.5 0 00-2.38 0l-6 3.245A2.5 2.5 0 004 9.354v6.269a2.5 2.5 0 001.311 2.2l6 3.245a2.5 2.5 0 002.379 0l6-3.245a2.5 2.5 0 001.31-2.2V9.354a2.5 2.5 0 00-1.31-2.2zm-7.9-2.365a1.492 1.492 0 011.427 0l6 3.244a1.454 1.454 0 01.151.11l-2.931 1.665-6.743-3.886zM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 01.151-.11zM5.787 16.941A1.5 1.5 0 015 15.622V9.354a1.5 1.5 0 01.053-.39L12 12.912v7.358a1.463 1.463 0 01-.213-.083zM20 15.622a1.5 1.5 0 01-.786 1.319l-6 3.245a1.5 1.5 0 01-.214.084v-7.358l6.947-3.949a1.508 1.508 0 01.053.391z"></path></svg>
                  In stock and ready to ship.
                </p>
                <p>
                  <svg viewBox="0 0 25 25" class="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M18.5 5h-1.775a4.231 4.231 0 00-8.45 0H6.5A2.5 2.5 0 004 7.5v11A2.5 2.5 0 006.5 21h12a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 5zm-6-3a3.245 3.245 0 013.225 3h-6.45A3.245 3.245 0 0112.5 2zM20 18.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6h12A1.5 1.5 0 0120 7.5z"></path><path d="M14.4 12.448a1.592 1.592 0 01.738-1.328 1.607 1.607 0 00-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 00-1.739 2.068 4.32 4.32 0 00.723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 00.474-.989 1.516 1.516 0 01-.926-1.403zM12.583 10.357a1.346 1.346 0 00.941-.5 1.594 1.594 0 00.361-.974.731.731 0 00-.008-.136 1.5 1.5 0 00-1.016.528 1.547 1.547 0 00-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011z"></path></svg>
                  Pick up at an Apple Store near you.
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CartReviewItem;
