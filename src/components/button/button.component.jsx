/*
different type of buttons

default

inverted

google sign in
*/
import "./button.style.scss";

const BUTTON_TYPE_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherPops }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
      {...otherPops}
    >
      {children}
    </button>
  );
};

export default Button;
