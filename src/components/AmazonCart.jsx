import { useRecoilState } from "recoil";
import Navbar from "./Navbar";
import { cartItemsState } from "../store/cartItemsState";
function ShoppingCart() {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  console.log(cartItems);
  return (
    <div className="shopping-cart">
      <h3>Shopping Cart</h3>
      <div className="shopping-cart-elements">
        {cartItems.map((element, index) => {
          return <Element element={element} key={index} />;
        })}
      </div>
    </div>
  );
}
function Element({ props }) {
  return (
    <div className="shopping-cart-element">
      <p>{props.name}</p>
      <img src={props.image} width={"100px"} />
      <p>{props.price}</p>
      <button id="increment-button">+</button>
      {props.quantity}
      <button id="decrement-button">-</button>
    </div>
  );
}
function OrderSummary() {
  return (
    <div>
      <h3>Order Summary</h3>
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
