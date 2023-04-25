import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemToCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const clearItemHandler = () => clearItemToCart(cartItem);
  const addItemHandler  =   ()  =>addItemToCart(cartItem);
  const removeItemHandler  =   ()  =>removeItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">
          <span onClick={removeItemHandler}>&#10094;</span>
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow">
          <span onClick={addItemHandler}>&#10095;</span>
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
