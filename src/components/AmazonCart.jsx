import { useRecoilState, useRecoilValue } from "recoil";
import Navbar from "./Navbar";
import { cartItemsState } from "../store/cartItemsState";
function ShoppingCart() {
  const [cartItems, setCartItemsState] = useRecoilState(cartItemsState);

  console.log(cartItems);
  return (
    <div className="shopping-cart">
      <h3>Shopping Cart</h3>
      <div className="shopping-cart-elements">
        {cartItems.map((element, index) => {
          console.log(element);
          return <Element element={element} key={index} />;
        })}
      </div>
    </div>
  );
}
function Element(props) {
  console.log(props);
  return (
    <div className="shopping-cart-element">
      <p>{props ? props.element.name : ""}</p>
      <img src={props.element["image-url"]} width={"100px"} />
      <p>{props ? props.element.price : ""}</p>
      <button id="increment-button">+</button>
      {props ? props.element.quantity : 0}
      <button id="decrement-button">-</button>
    </div>
  );
}
function OrderSummary() {
  const cartItems = useRecoilValue(cartItemsState);
  // console.log(cartItems);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>Order Summary</h3>
      <p>
        Items &nbsp; ({cartItems.length > 0 ? cartItems.length : 0}): &#8377;
        {cartItems.length}
      </p>
    </div>
  );
}
export default function AmazonCart() {
  return (
    <div className="cart">
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ShoppingCart />
        <OrderSummary />
      </div>
    </div>
  );
}
