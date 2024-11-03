import Navbar from "./Navbar";
import { wishItemsState } from "../store/wishItemsState";
import { useRecoilValue } from "recoil";
export default function WishList() {
  const wishItems = useRecoilValue(wishItemsState);
  return (
    <div className="wishlist">
      <Navbar />
      <div className="super-card">
        <div className="card">{wishItems.join(",")}</div>
      </div>
    </div>
  );
}
