

import uniqid from "uniqid";
import "../../styles/CartReview.css";
import CartReviewItem from "./CartReviewItem";

function CartReview({ items, removeItem }) {

  const renderItems = () => {
      return items.map(item => (
        <CartReviewItem key={uniqid()} item={item} removeItem={removeItem}/>
      ));
  }

  const getSum = () => {
    return items.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }
    

  return (
    <div className="cart-review">
        <h1>Review your bag.</h1>
        <p>Free delivery and free returns.</p>
        <div className="monthly-card">
            <img width="82" height="82" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecard-logo-201910?wid=82&amp;hei=82&amp;fmt=jpeg&amp;qlt=95&amp;.v=1572631318807" aria-hidden="true"/>
            <p>Items not purchased with a one time payment may be eligible for $182.66/mo. at 0% APR◊ when you check out with Apple Card Monthly Installments. <a>Learn more</a></p>
        </div>
        {renderItems()}
        <div className="cart-review-summary">
            <div className="summary-top">
              <div className="summary-top-1">
                <p>Subtotal</p>
                <p>{getSum().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
              </div>
              <div className="summary-top-2">
                <p>Shipping</p>
                <p>FREE</p>
              </div>
              <div className="summary-top-3">
                <p>Estimated tax:  <a className="zip-code-link">Enter zip code &#x25BC;</a></p>
                <p>$ -</p>
              </div>
            </div>
            <div className="summary-bottom">
              <h2>Summary</h2>
              <h2>{getSum().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h2>
            </div>
        </div>
    </div>
  )
}

export default CartReview;
