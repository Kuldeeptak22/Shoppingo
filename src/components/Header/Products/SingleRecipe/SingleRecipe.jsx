import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchSingleRecipe } from "../../../../Redux/Actions/Actions";
import "./SingleRecipe.scss";

const SingleRecipe = () => {
  const product = useSelector((state) => state.singleRecipe);
  //   const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const {
    calories,
    image,
    images,
    label,
    mealType,
    totalNutrients,
    totalWeight,
    source,
    url,
    ingredientLines,
  } = product;

  return (
    <>
      <div className="row mx-auto py-5 singleProduct">
        <div className="col-md-6 my-5">
          <img src={image} alt={label} className="img-fluid image" />
        </div>
        <div className="col-md-6 my-5">
          <div className="row">
            <p className="fs-4 fw-bold">Product Details</p>
            <div className="col-12">
              <p>
                <span className="fw-bold">Title :</span> <span> {label}</span>
              </p>
            </div>
            <div className="col-12">
              <p>
                <span className="fw-bold">Meal-Type :</span>
                <span> {mealType}</span>
              </p>
            </div>
            <div className="col-12">
              <p>
                <span className="fw-bold">TotalWeight : </span>
                <span> {Math.floor(totalWeight)} gramms</span>
              </p>
            </div>
            <div className="col-12">
              <p>
                <span className="fw-bold">TotalNutrients : </span>
                <span>
                  {totalNutrients?.CA?.label + " "}
                  {Math.floor(totalNutrients?.CA?.quantity)} mg
                </span>
              </p>
            </div>
            <div className="col-12">
              <p>
                <span className="fw-bold">Source : </span>
                <span>
                  <a target="_blank" href={url} className="source">
                    {" " + source}
                  </a>
                </span>
              </p>
            </div>
            <div className="col-12">
              <p>
                <span className="fw-bold">Calories : </span>
                <span> {Math.floor(calories)} gramms</span>
              </p>
            </div>

            <div className="accordion my-4" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Ingredients:
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse "
                >
                  <div className="accordion-body">
                    <ul>
                      {ingredientLines &&
                        ingredientLines.map((ingradient, index) => {
                          return <li key={index}>{ingradient}</li>;
                        })}
                    </ul>
                  </div>
                </div>
              </div>
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

export default SingleRecipe;
