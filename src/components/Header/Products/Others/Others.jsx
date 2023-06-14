import React, { useState, useEffect } from "react";
import "./Others.scss";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { fetchData } from "../../../../Redux/Actions/Actions";
import { Link } from "react-router-dom";

const Others = () => {
  // const [userData, setUserData] = useState([]);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const filterDetails =
    products &&
    products.slice(0, 30).map((data, index) => {
      const { price, title, id, rating, thumbnail, brand, discountPercentage } =
        data;
      return (
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12 my-5 mx-auto"
          key={index}
        >
          <Link to={`/product/${id}`}>
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
                <p className="card-text text-danger">
                  {discountPercentage}% OFF
                </p>
                <p className="card-title fw-bold">{title}</p>
                <span className="card-text text-white  bg-success rounded px-2">
                  ${price}
                </span>
                <span className="card-text mx-1 text-secondary">
                  <s>${price + 100}</s>
                </span>
                <br />
                Brand:
                <p className="card-text text-secondary d-inline"> {brand}</p>
              </div>
              <div className="btn btn-primary w-50 mx-4 mb-3">Add to Cart</div>
            </div>
          </Link>
        </div>
      );
    });
  return (
    <>
      <div className="row mx-auto">
        <p className="fs-1 fw-bold others">Others</p>
        <div className="col-md-4 other my-5">
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
                    htmlFor="firstCheckboxStretched"
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
                    htmlFor="secondCheckboxStretched"
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
                    htmlFor="thirdCheckboxStretched"
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
                    htmlFor="forthCheckboxStretched"
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
                    htmlFor="fifthCheckboxStretched"
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
