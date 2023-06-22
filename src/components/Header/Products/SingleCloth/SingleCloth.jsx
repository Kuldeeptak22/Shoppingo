import React, { useState, useEffect } from "react";
import "./SingleCloth.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCloth } from "../../../../Redux/Actions/Actions";
import Stars from "../Stars/Stars";

const SingleCloth = () => {
  const products = useSelector((state) => state.singleCloth);
  console.log("SingleCloth", products);
  const dispatch = useDispatch();
  let { clothId } = useParams();

  useEffect(() => {
    if (clothId && clothId !== "") dispatch(fetchSingleCloth(clothId));
    window.scrollTo(0, 0);
  }, [clothId]);

  const { image, category, description, price, title, rating } = products;

  return (
    <div className="row  mx-auto py-5 singleProduct">
      <div className="col-md-6 my-5 ">
        <img src={image} alt={title} className="img-fluid image" />
      </div>
      <div className="col-md-6 my-5">
        <div className="row">
          <p className="fs-4 fw-bold">Cloth Details</p>
          <div className="col-md-8">
            <p>
              <span className="fw-bold">Title :</span> <span> {title}</span>
            </p>
          </div>
          <div className="col-md-4">
            <Stars stars={rating?.rate} reviews={rating?.count} />
          </div>

          <div className="col-12">
            <p>
              <span className="fw-bold">Category :</span>
              <span> {" " + category}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span className="fw-bold">Description :</span>
            </p>
            <span>{" " + description}</span>
          </div>

          <div className="col-12 my-3">
            <p className="text-break">
              <span className="fw-bold">Price :</span>
              <span className="bg-success px-2 py-2 mx-3 text-white">
                {" " + price} $
              </span>
            </p>
          </div>

          <div>
            <button className="button my-3">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCloth;
