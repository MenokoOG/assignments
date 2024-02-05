import React from "react";
import starEmpty from "./assets/star-empty.png";
import starFill from "./assets/star-filled.png";

function Star({ isFilled, toggleFavorite }) {
  // Use the isFilled prop to determine which icon to display
  const starIcon = isFilled ? starFill : starEmpty;

  return (
    <img
      src={starIcon}
      className="card--favorite"
      onClick={toggleFavorite} // Pass the toggleFavorite function to handle click
      alt="Star Icon"
    />
  );
}

export default Star;
