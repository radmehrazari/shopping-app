import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, total} =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block"></div>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>;
      })}
      <span className="total">Total: {total} $</span>
    </div>
  );
};

export default Checkout;

// <div key={id}>
//   <h2>{name}</h2>
//   <span>{quantity}</span>
//   <br />
//   <span onClick={() => removeItemToCart(item)}>decrement</span>
//   <br />
//   <span onClick={() => addItemToCart(item)}>increment</span>
// </div>

// const reduceArrowItem = (event, key) => {
//   const { quantity, id } = cartItems.find((item) => item.id === key);

//   if (quantity === 1) {
//     removeItem("", id);
//   } else {
//     setCartItem(
//       cartItems.map((cartItem) =>
//         cartItem.id === id
//           ? { ...cartItem, quantity: cartItem.quantity - 1 }
//           : cartItem
//       )
//     );
//   }
// };

// const removeItem = (event, key) => {
//   const { id } = cartItems.find((item) => item.id === key);

//   setCartItem(cartItems.filter((data) => data.id !== id));
// };

// const addArrowItem = (event, key) => {
//   const { id } = cartItems.find((item) => item.id === key);

//   setCartItem(
//     cartItems.map((cartItem) =>
//       cartItem.id === id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     )
//   );
// };

/* <table>
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr> */
// <tr key={item.id}>
//   <td>
//     <img src={item.imageUrl} alt={`${item.name}`} />
//   </td>
//   <td>
//     <span>{item.name}</span>
//   </td>
//   <td>
//     <span
//       className="icon"
//       onClick={removeItemToCart} //(event) => reduceArrowItem(event, item.id)
//     >
//       &#8249;
//     </span>
//     <span>{item.quantity}</span>
//     <span
//       className="icon"
//       onClick={addItemToCart} //(event) => addArrowItem(event, item.id)
//     >
//       &#8250;
//     </span>
//   </td>
//   <td>
//     <span>{item.price} $</span>
//   </td>
//   <td>
//     <span
//       className="icon"
//       onClick={(event) => removeItem(event, item.id)}
//     >
//       &#215;
//     </span>
//   </td>
// </tr>

/* </table>

      <span>
        tootal =
        {cartItems.reduce(
          (acc, currentelement) =>
            acc + currentelement.quantity * currentelement.price,
          0
        )}{" $ "}
      </span> */
