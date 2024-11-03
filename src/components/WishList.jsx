import Navbar from "./Navbar";
import { wishItemsState } from "../store/wishItemsState";
import { cartItemsState } from "../store/cartItemsState";
import { useRecoilState, useRecoilValue } from "recoil";
export default function WishList() {
  const wishItems = useRecoilValue(wishItemsState);
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  return (
    <div className="wishlist">
      <Navbar />
      <div className="super-card">
        {wishItems.map((element, index) => {
          return (
            <div
              className="card"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p>{element}</p>
              <button
                onClick={() => {
                  setCartItems([...cartItems, element]);
                }}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
