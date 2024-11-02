import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import AmazonCart from "./components/AmazonCart";
import WishList from "./components/WishList";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div
      className="landing-page"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {" "}
      <p>Welcome to Amazon Cart</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          Go to Cart
        </button>
        <button
          onClick={() => {
            navigate("/wishlist");
          }}
        >
          Go to Wishlist
        </button>
      </div>
    </div>
  );
}
function NotFound() {
  return <div className="not-found">Error 404.Page not found</div>;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/cart" element={<AmazonCart />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
