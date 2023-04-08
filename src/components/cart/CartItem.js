
import "../../styles/CartItem.css"
import uniqid from "uniqid";

function CartItem({ name, image }) {
  return (
    <div className="cart-item">
        <img src={image} alt="product" key={uniqid()}></img>
        {name}
    </div>
  )
}

export default CartItem;
