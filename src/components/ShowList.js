import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ShowList.css"; 

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowDetails = (showId) => {
    navigate(`/show/${showId}`);
  };

  return (
    <div className="show-list-container">
      {shows.map((show, index) => (
        <div key={show.show.id} className="show-card">
          {show.show.image && show.show.image.medium && (
            <div>
              <img
                src={show.show.image.medium}
                alt={show.show.name}
                className="show-image"
              />
              <p>Show Name: {show.show.name}</p>
              <p>Show ID: {show.show.id}</p>
              {/* Add more information you want to inspect */}
            </div>
          )}
          <div className="show-details">
            <h2>{show.show.name}</h2>
            <button onClick={() => handleShowDetails(show.show.id)}>
              Show Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
