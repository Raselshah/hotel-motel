import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ product }) => {
  const { id, name, price, category, img } = product;

  const navigate = useNavigate();

  const bookingDynamic = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="product-card">
      <div className="product-photo">
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{category}</p>
      <button onClick={() => bookingDynamic(id)} className="booking-button">
        Book Now
      </button>
    </div>
  );
};

export default HomePage;
