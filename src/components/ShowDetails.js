

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/ShowDetails.css"; 

const ShowDetails = () => {
  const [show, setShow] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    navigate(`/book/${show.id}`, { state: { showDetails: show } });
  };

  return (
    <div className="show-details-container">
      <h1>{show.name}</h1>
      {show.image && show.image.medium && (
        <div className="show-card">
          <img src={show.image.medium} alt={show.name} />
          <button onClick={handleBookTicket}>Book Ticket</button>
        </div>
      )}
      
    </div>
  );
};

export default ShowDetails;
