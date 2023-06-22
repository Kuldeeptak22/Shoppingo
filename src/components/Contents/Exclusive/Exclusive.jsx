import React, { useEffect, useState } from "react";
import "./Exclusive.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../Redux/Actions/Actions";
import Stars from "../../Header/Products/Stars/Stars";

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
                <span className="card-text text-success fw-bold">${price}</span>
                &nbsp;
                <span className="card-text">
                  <s>${price + 100}</s>
                </span>
                <br />
                <Stars stars={rating?.rate} reviews={rating?.count} />
              </div>
            </div>
          </div>
        );
      });

  return (
    <>
      <div className="row exclusive mx-auto">
        <div className="col-12 text-center ">
          <p className="fs-2 fw-bold">Exclusive product</p>
        </div>
        {/* <div className="col-12 lising ">
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
        </div> */}
        <div className="col-12">
          <p className="fs-5 text-center text-secondary">
            All Things Are Possible With Coffee And A Cute{" "}
            <span className="text-danger">OUTFIT</span>.
          </p>
        </div>
        <div className="col-12">
          <div className="row mx-auto exe">{filterDetails}</div>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
