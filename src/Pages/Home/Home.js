import React from "react";
import LoadProducts from "../../hooks/Products/Products";
import HomePage from "./HomePage/HomePage";
import './Home.css'

const Home = () => {
  const [products] = LoadProducts();
  return (
    <div className="products-container">
      <div className="home-container">
      {products.map((product) => (
        <HomePage key={product.id} product={product}></HomePage>
      ))}
    </div>
    </div>
  );
};

export default Home;
