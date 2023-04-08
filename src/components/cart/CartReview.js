

import uniqid from "uniqid";
import "../../styles/CartReview.css";
import CartReviewItem from "./CartReviewItem";

function CartReview({ items }) {

    const renderItems = () => {
        return items.map(item => (
          <CartReviewItem key={uniqid()} item={item}/>
        ));
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
    </div>
  )
}

export default CartReview;
