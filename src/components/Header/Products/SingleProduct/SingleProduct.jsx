import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import "./SingleProduct.scss";
import { fetchProduct } from "../../../../Redux/Actions/Actions";

const SingleProduct = () => {
  const products = useSelector((state) => state.singleProduct);
  console.log("Single", products);
  const dispatch = useDispatch();
  let { productId } = useParams();
  // const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
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
      <div className="row  my-5 mx-auto py-3 singleProduct">
        <div className="col-md-6 my-5">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="col-md-6 my-5">
          <div className="row">
            <p className="fs-4 fw-bold">Product Details</p>
            <p>Title : {title}</p>
            <p>Brand : {brand}</p>
            <p>Category : {category}</p>
            <p>Description : {description}</p>
            <p className="text-break">
              DiscountPercentage : {discountPercentage}% OFF
            </p>
            <p>Price : {price}</p>
            <p>Rating : {rating}</p>
            <p>Stock : {stock}</p>
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
