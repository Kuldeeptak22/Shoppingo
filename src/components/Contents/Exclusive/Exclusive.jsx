import React, { useEffect, useState } from "react";
import "./Exclusive.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../Redux/Actions/Actions";

const Exclusive = () => {
  const products = useSelector((state) => state.allProducts.allData);

  const dispatch = useDispatch();
  // const [userData, setUserData] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const filterDetails =
    products &&
    products
      .filter((data) => {
        if (data.category.includes("jewelery")) {
          return data.category.includes("jewelery");
        }
      })
      .map((filteredData) => {
        const { id, title, image, price, rating } = filteredData;
        console.log("filter", filteredData);
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
          <p className="fs-2 fw-bold">Exclusive product</p>
        </div>
        <div className="col-12 lising ">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-sm-fluid mx-auto">
              <ul className="navbar-nav listgroup">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    New Arrival
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Best Sellers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Featured
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Special Offer
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-12">
          <div className="row mx-auto exe">{filterDetails}</div>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
