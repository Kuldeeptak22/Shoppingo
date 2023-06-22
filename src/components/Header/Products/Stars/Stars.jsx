import React from "react";
import "./Stars.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <>
        <span key={index}>
          {stars >= index + 1 ? (
            <FontAwesomeIcon icon={faStar} className="text-warning" />
          ) : stars >= number ? (
            <FontAwesomeIcon icon={faStarHalfStroke} className="text-warning" />
          ) : (
            <i className="fa-sharp fa-regular fa-star text-warning"></i>
          )}
        </span>
      </>
    );
  });

  return (
    <>
      <div>
        {ratingStar}
        <span> ({reviews})</span>
      </div>
    </>
  );
};

export default Stars;
