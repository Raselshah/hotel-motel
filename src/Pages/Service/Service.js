import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Service = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>this is service {serviceId}</h2>
      <button onClick={() => navigate("/about")}>Check Out</button>
    </div>
  );
};

export default Service;
