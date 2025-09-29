import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const removeFromCart = (id) => {
    let updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id) => {
    let updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    let updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">SKimsCare</div>
        <nav className="nav">
          <a href="/home">Products</a>
          <a href="#">Deals</a>
          <a href="#">Trending</a>
        </nav>
        <div className="user-actions">
          <span className="welcome-text">
            Welcome, {user?.name || user?.email}!
          </span>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => navigate("/cart")}>Cart 🛒</button>
        </div>
      </header>

      <div className="cart-page">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-item" key={`${item.id}-${index}`}>
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h3 className="item-name">{item.title}</h3>
                  <p className="item-price">
                    ZAR {(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>

                  <div className="qty-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-summary">
          <h2>Summary</h2>
          <p>Total: ZAR {total.toFixed(2)}</p>
          <button className="checkout-btn">Checkout</button>
          <button onClick={() => navigate("/home")}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}
