import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((ratingValue) => (
        <span key={ratingValue}>
          {value >= ratingValue ? (
            <FaStar />
          ) : value >= ratingValue - 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}

      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Rating;
