import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon-styles.scss";
import { useContext } from "react";

const CartIcon = () => {

    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);

    const onClickToggle = () => {
        // setIsCartOpen (!isCartOpen);
        isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
      };
    

    return (
        <div className="cart-icon-container" onClick={onClickToggle}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    )

};

export default CartIcon;
