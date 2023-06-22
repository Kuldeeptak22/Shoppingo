import React, { useState, useEffect } from "react";
import "./Others.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../../Redux/Actions/Actions";
import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Filter from "../Filter/Filter";

const Others = () => {
  const [filter, setFilter] = useState("");
  const products = useSelector((state) => state.allProducts.products);
  const filteredData = useSelector((state) => state.allProducts.filteredData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    window.scrollTo(0, 0);
  }, []);

  const filterDetails =
    filteredData.length <= 0
      ? products &&
        products
          .sort((a, b) =>
            a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
          )
          .slice(0, 30)
          .filter((item) => {
            return (
              item.title.toLowerCase().includes(filter.toLowerCase()) ||
              item.brand.toLowerCase().includes(filter.toLowerCase())
            );
          })
          .map((data, index) => {
            const {
              price,
              title,
              id,
              rating,
              thumbnail,
              brand,
              discountPercentage,
              stock,
            } = data;
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 my-5 mx-auto"
                key={index}
              >
                <Link to={`/product/${id}`} className="link">
                  <div className="mx-auto card h-100 cardImage">
                    <img
                      src={thumbnail}
                      className="card-img-top mx-auto detail"
                      alt={title}
                    />
                    <div className="card-body">
                      <Stars stars={rating} reviews={stock} />
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
                      <p className="card-text text-secondary d-inline">
                        {" "}
                        {brand}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
      : filteredData &&
        filteredData
          .sort((a, b) =>
            a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
          )
          .slice(0, 30)
          .filter((item) => {
            return (
              item.title.toLowerCase().includes(filter.toLowerCase()) ||
              item.brand.toLowerCase().includes(filter.toLowerCase())
            );
          })
          .map((data, index) => {
            const {
              price,
              title,
              id,
              rating,
              thumbnail,
              brand,
              discountPercentage,
              stock,
            } = data;
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 my-5 mx-auto"
                key={index}
              >
                <Link to={`/product/${id}`} className="link">
                  <div className="mx-auto card h-100 cardImage">
                    <img
                      src={thumbnail}
                      className="card-img-top mx-auto detail"
                      alt={title}
                    />
                    <div className="card-body">
                      <Stars stars={rating} reviews={stock} />
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
                      <p className="card-text text-secondary d-inline">
                        {" "}
                        {brand}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          });
  return (
    <>
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="dvFilter filterData col-md-3">
            <div className="sticky-top">
              <div className="input-group mb-1 searchbar">
                <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="SEARCH"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
              <Filter />
            </div>
          </div>
          <div className="dvProductListing col-md-9">
            <p className="fs-1 fw-bold others">Others</p>
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
      </div>
    </>
  );
};

export default Others;
