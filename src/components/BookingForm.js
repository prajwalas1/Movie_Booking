import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FinalPage from "./FinalPage";
import "../Styles/BookingForm.css";

const BookingForm = () => {
  const location = useLocation();
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const showDetails = location.state?.showDetails;

  useEffect(() => {
  }, [showDetails]);

  const handleFormSubmit = (e) => {
    e.preventDefault();


    console.log("Form Data:", showDetails);

    setIsBookingConfirmed(true);
  };

  return (
    <div className="booking-form-container">
      {isBookingConfirmed ? (
        <FinalPage />
      ) : (
        <>
          <h2>Movie Booking</h2>
          <div>
            <img src={showDetails.image.medium} alt={showDetails.name} />
            <p>Name: {showDetails.name}</p>
            <p>Type: {showDetails.type}</p>
            <p>Language: {showDetails.language}</p>
            <p>Genres: {showDetails.genres.join(", ")}</p>
            <p>Status: {showDetails.status}</p>
            <p>Runtime: {showDetails.runtime}</p>
            <p>Average Runtime: {showDetails.averageRuntime}</p>
            <p>Official Site: {showDetails.officialSite}</p>
          </div>
          <form onSubmit={handleFormSubmit}>
            <button type="submit">Confirm Booking</button>
          </form>
        </>
      )}
    </div>
  );
};

export default BookingForm;
