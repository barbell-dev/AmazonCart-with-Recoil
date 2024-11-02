import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#232f3e",
        color: "white",
        fontFamily: "sans-serif",
        borderRadius: "2px",
      }}
    >
      <p style={{}}>amazon.in</p>
      <div style={{ display: "flex" }}>
        <p>Hello,user</p>
        <button style={{ borderRadius: "2px" }}>
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}
