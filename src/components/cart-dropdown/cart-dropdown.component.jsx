import Button from "../button/button.component";
import "./cart-dropdown.style.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Checkout</Button>
    </div>
  );
};
export default CartDropDown;