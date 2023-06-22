import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../../Redux/Actions/Actions";
import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";

const Cloths = () => {
  const products = useSelector((state) => state.allProducts.allData);
  const dispatch = useDispatch();
  console.log("products", products);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const filterDetails =
    products &&
    products
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
            <Link to={`/cloths/${id}`} className="link">
              <div className="mx-auto card h-100 cardImage">
                <img
                  src={image}
                  className="card-img-top mx-auto"
                  style={{ width: "50%" }}
                  alt={title}
                />
                <div className="card-body">
                  <h5 className="card-title fs-6">{title}</h5>
                  <span className="card-text text-white px-1 bg-success fs-6">
                    ${price}
                  </span>
                  &nbsp;
                  <span className="card-text fs-6">
                    <s>${price + 100}</s>
                  </span>
                  <br />
                  <Stars stars={rating?.rate} reviews={rating?.count} />
                </div>
              </div>
            </Link>
          </div>
        );
      });

  return (
    <>
      <div className="row mx-auto">
        <p className="fs-1 fw-bold others pt-5">Cloths</p>
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
                    Men's
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
                    Women's
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
                    Kid's
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

export default Cloths;
