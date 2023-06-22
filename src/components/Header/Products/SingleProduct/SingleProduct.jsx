import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SingleProduct.scss";
import { fetchProduct } from "../../../../Redux/Actions/Actions";
import Stars from "../Stars/Stars";

const SingleProduct = () => {
  const products = useSelector((state) => state.singleProduct);
  console.log("Single", products);
  const dispatch = useDispatch();
  let { productId } = useParams();
  // const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    window.scrollTo(0, 0);
  }, [productId]);

  const {
    category,
    description,
    price,
    title,
    rating,
    stock,
    thumbnail,
    images,
    brand,
    discountPercentage,
  } = products;

  return (
    <>
      <div className="row mx-auto py-5 singleProduct">
        <div className="col-md-6 my-5 ">
          <img src={thumbnail} alt={title} className="img-fluid image" />
        </div>
        <div className="col-md-6 my-5">
          <div className="row">
            <p className="fs-4 fw-bold">Product Details</p>
            <div className="col-md-7">
              <p>
                <span className="fw-bold">Title :</span> <span> {title}</span>{" "}
              </p>
            </div>
            <div className="col-md-4">
              <Stars stars={rating} reviews={stock} />
            </div>
            <div className="col-12">
              <p>
                <span className="fw-bold">Brand :</span> <span> {brand}</span>
              </p>
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
                <span>{" " + description}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="text-break">
                <span className="fw-bold">DiscountPercentage :</span>
                <span>{" " + discountPercentage}% OFF</span>
              </p>
            </div>
            <div className="col-12">
              <p className="text-break">
                <span className="fw-bold">Price :</span>
                <span>{" " + price}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="text-break">
                <span className="fw-bold">Rating :</span>
                <span>{" " + rating}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="text-break">
                <span className="fw-bold">Stock :</span>
                <span>{" " + stock}</span>
              </p>
            </div>
            <div>
              <button className="button">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
