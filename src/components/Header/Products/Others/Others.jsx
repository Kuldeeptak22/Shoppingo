import React, { useState, useEffect } from "react";
import "./Others.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Others = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setUserData(res.data.products))
      .catch((error) => console.log(error))
      .finally(() => {
        return;
      });
  }, []);

  const filterDetails =
    userData &&
    userData.slice(0, 30).map((data) => {
      const {
        category,
        price,
        title,
        id,
        rating,
        stock,
        thumbnail,
        brand,
        discountPercentage,
      } = data;
      return (
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12 my-5 mx-auto"
          key={id}
        >
          <div className="mx-auto card h-100 cardImage">
            <img
              src={thumbnail}
              className="card-img-top mx-auto detail"
              alt={title}
            />
            <div className="card-body">
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon
                className="text-warning"
                icon={faStarHalfStroke}
              />
              <span className="mx-2">({rating})</span>
              <p className="card-text text-danger">{discountPercentage}% OFF</p>
              <p className="card-title fw-bold">{title}</p>
              <span className="card-text text-white  bg-success rounded px-2">
                ${price}
              </span>
              <span className="card-text mx-1 text-secondary">
                <s>${price + 100}</s>
              </span>
              <br />
              Category:{" "}
              <p className="card-text text-secondary d-inline fw-normal">
                {category}
              </p>
              <br />
              Brand:
              <p className="card-text text-secondary d-inline"> {brand}</p>
            </div>
            <div className="btn btn-primary w-50 mx-4 mb-3">Add to Cart</div>
          </div>
        </div>
      );
    });
  return (
    <>
      <div className="row mx-auto">
        <p className="fs-1 fw-bold others">Others</p>
        <div className="col-md-4 bg-body-tertiary other my-5">
          <p className="fs-4 my-5 fw-bold category">Categories</p>
          <div className="row">
            <div className="col-12">
              <ul className="list-group cateList">
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="firstCheckboxStretched"
                  />
                  <label
                    className="form-check-label stretched-link mx-2"
                    for="firstCheckboxStretched"
                  >
                    Laptops
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="secondCheckboxStretched"
                  />
                  <label
                    className="form-check-label stretched-link mx-2"
                    for="secondCheckboxStretched"
                  >
                    Perfumes
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="thirdCheckboxStretched"
                  />
                  <label
                    className="form-check-label stretched-link mx-2"
                    for="thirdCheckboxStretched"
                  >
                    Cosmatics
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="forthCheckboxStretched"
                  />
                  <label
                    className="form-check-label stretched-link mx-2"
                    for="forthCheckboxStretched"
                  >
                    Food
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="fifthCheckboxStretched"
                  />
                  <label
                    className="form-check-label stretched-link mx-2"
                    for="fifthCheckboxStretched"
                  >
                    Home Decor
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row exclusive mx-auto">
            <div className="col-12 text-center mt-5">
              <p className="fs-3 fw-bold">Products List</p>
            </div>
          </div>
          <div className="col-12">
            <div className="row mx-auto exe cardBox">{filterDetails}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Others;
