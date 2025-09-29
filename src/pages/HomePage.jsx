import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import heroImg from "../assets/b7.avif";
import Img1 from "../assets/b1.jpg";
import Img2 from "../assets/b2.jpg";
import Img3 from "../assets/b3.jpg";
import Img4 from "../assets/b4.jpg";
import Img5 from "../assets/b5.jpg";
import Img6 from "../assets/b6.jpg";
import Img8 from "../assets/b7.jpg";
import Img9 from "../assets/b8.avif";
import Img10 from "../assets/b9.jpg";
import Img11 from "../assets/b10.jpg";
import Img12 from "../assets/b11.jpg";
import Img13 from "../assets/b12.jpg";


export default function HomePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  };

  const subcategories = [
    { name: "Oily", img: Img1 },
    { name: "Crusty", img: Img2 },
    { name: "Rough", img: Img3 },
    { name: "Pure", img: Img4 },
    { name: "Acne", img: Img5 },
    { name: "Prone", img: Img6 },
  ];

  const products = [
  { id: 1, title: "LaRoche Posay", price: 599.98, image: Img8 },
  { id: 2, title: "LaRoche Posay Wash", price: 699.85, image: Img9 },
  { id: 3, title: "Clinique", price: 499.99, image: Img10 },
  { id: 4, title: "Neutrogena", price: 299.99, image: Img11 },
  { id: 5, title: "Ordinary", price: 399.99, image: Img12 },
  { id: 6, title: "Clean Clear", price: 150.99, image: Img13 },
    { id: 7, title: "Aloe", price: 359.89, image: Img2 },
  { id: 8, title: "Face Mask", price: 150.99, image: Img4 },
];

  return (
    <div className="homepage">
      <header className="header">
  <div className="logo">SKimsCare</div>
  <nav className="nav">
    <a href="#">Products</a>
    <a href="#">Deals</a>
    </nav>
  <div className="user-actions">
    <span className="welcome-text">
      Welcome, {user?.name || user?.email}!
    </span>
    <button onClick={handleLogout}>Logout</button>
    <button onClick={() => navigate("/cart")}>Cart 🛒</button>
    <button onClick={() => navigate("/profile")}>Profile 👤</button>

  </div>
</header>

      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to</h1>
          <p>SkimsCare, where we nurture your skin based on its texture.</p>
          <button>Shop Now</button>
        </div>
        <img src={heroImg} alt="hero" className="hero-img" />
      </section>

      <section className="subcategories">
        {subcategories.map((item, index) => (
          <div className="subcategory" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </section>

      <main className="content">
        <div className="bg-shape one"></div>
<div className="bg-shape two"></div>
        <aside className="filters">
          <h3>Filter Results</h3>
          <div className="filter-group">
            <label>
              <input type="checkbox" /> Oily Skin
            </label>
            <label>
              <input type="checkbox" /> Prone Skin
            </label>
            <label>
              <input type="checkbox" /> Acne Skin Problems
            </label>
            <label>
              <input type="checkbox" /> Rough Skin
            </label>
            <label>
              <input type="checkbox" /> Pure/clean Skin
            </label>
            <label>
              <input type="checkbox" /> Crusty Skin
            </label>
          </div>
        </aside>

        <section className="products">
  {products.map((product) => (
    <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.title} />
      <p className="product-title">{product.title}</p>
      <p className="product-price">ZAR{product.price}</p>
      <button
        className="add-cart"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  ))}
</section>
      </main>
    </div>
  );
}
