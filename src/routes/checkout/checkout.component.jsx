import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, setCartItem } = useContext(CartContext);

  const reduceArrowItem = (event, key) => {
    const { quantity, id } = cartItems.find((item) => item.id === key);

    if (quantity === 1) {
      removeItem("", id);
    } else {
      setCartItem(
        cartItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const addArrowItem = (event, key) => {
    const { id } = cartItems.find((item) => item.id === key);

    setCartItem(
      cartItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const removeItem = (event, key) => {
    const { id } = cartItems.find((item) => item.id === key);

    setCartItem(cartItems.filter((data) => data.id !== id));
  };

  return (
    <div>
      <table>
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        {cartItems.map((item) => {
          return (
            <tr>
              <td>
                <img src={item.imageUrl} alt={`${item.name}`} />
              </td>
              <td>
                <span>{item.name}</span>
              </td>
              <td key={item.id}>
                <span
                  className="icon"
                  onClick={(event) => reduceArrowItem(event, item.id)}
                >
                  &#8249;
                </span>
                <span>{item.quantity}</span>
                <span
                  className="icon"
                  onClick={(event) => addArrowItem(event, item.id)}
                >
                  &#8250;
                </span>
              </td>
              <td>
                <span>{item.price} $</span>
              </td>
              <td>
                <span
                  className="icon"
                  onClick={(event) => removeItem(event, item.id)}
                >
                  &#215;
                </span>
              </td>
            </tr>
          );
        })}
      </table>

      <span>
        tootal =
        {cartItems.reduce(
          (acc, currentelement) =>
            acc + currentelement.quantity * currentelement.price,
          0
        )}{" $ "}
      </span>
    </div>
  );
};

export default Checkout;
