import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import "./FeaturedProducts.scss";

const FeaturedProducts = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setUserData(res.data))
      .catch((error) => console.log(error))
      .finally(() => {
        return;
      });
  }, []);

  const filterDetails =
    userData &&
    userData
      .filter((data) => {
        if (data.category.includes("men's clothing")) {
          return data.category.includes("men's clothing");
        }
      })
      .map((filteredData) => {
        const { id, title, image, price, rating } = filteredData;
        return (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 my-5 mx-auto"
            key={id}
          >
            <div className="mx-auto card h-100 cardImage">
              <img
                src={image}
                className="card-img-top mx-auto"
                style={{ width: "50%" }}
                alt={title}
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <span className="card-text text-success">${price}</span>
                &nbsp;
                <span className="card-text">
                  <s>${price + 100}</s>
                </span>
                <br />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon
                  className="text-warning"
                  icon={faStarHalfStroke}
                />
                <span>({rating.rate})</span>
              </div>
            </div>
          </div>
        );
      });

  return (
    <>
      <div className="row exclusive mx-auto">
        <div className="col-12 text-center mt-5">
          <p className="fs-2 fw-bold">Featured products</p>
        </div>
        <div className="col-12 lising ">
          <p className="text-center">
            I always say shopping is cheaper than a psychiatrist
          </p>
        </div>
        <div className="col-12">
          <div className="row mx-auto exe">{filterDetails}</div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
