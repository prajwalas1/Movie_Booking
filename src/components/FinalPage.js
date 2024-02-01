

import React from "react";
import { useNavigate } from "react-router-dom";

const FinalPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Thank You for Booking!</h2>
      <p>Your ticket is confirmed. Enjoy the show!</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default FinalPage;
