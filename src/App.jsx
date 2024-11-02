import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AmazonCart from "./components/AmazonCart";
import WishList from "./components/WishList";
function LandingPage() {
  return <>Landing</>;
}
function NotFound() {
  return <div className="notfound">Error 404.Page not found</div>;
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
