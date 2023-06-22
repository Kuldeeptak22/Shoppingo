import React, { useState, useEffect } from "react";
import "./Food.scss";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import {
  fetchRecipes,
  fetchSingleRecipe,
} from "../../../../Redux/Actions/Actions";
import { Link } from "react-router-dom";

const Food = () => {
  //   const [recipe, setRecipe] = useState([]);
  const products = useSelector((state) => state.allProducts.allRecipes);
  const dispatch = useDispatch();

  const selectRecipe = (index) => {
    dispatch(fetchSingleRecipe(index));
  };

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const filterDetails =
    products &&
    products.slice(0, 30).map((data, index) => {
      // console.log("data", data.recipe);
      const {
        calories,
        healthLabels,
        image,
        images,
        ingredients,
        label,
        mealType,
        totalDaily,
        totalNutrients,
        totalWeight,
        url,
        uri,
      } = data.recipe;
      return (
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12 my-5 mx-auto"
          key={index}
          onClick={() => selectRecipe(index)}
        >
          <Link to={`/recipe/${index}`} className="food">
            <div className="mx-auto card h-100 cardImage">
              <img
                src={image}
                className="card-img-top mx-auto detail"
                alt={label}
              />
              <div className="card-body">
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon
                  className="text-warning"
                  icon={faStarHalfStroke}
                />
                {/* <span className="mx-2">{yield}</span> */}
                <p className="card-text text-danger">{mealType}</p>
                <p className="card-title fw-bold">{label}</p>
                <p className="card-title">{Math.floor(totalWeight)} Grams</p>
                {/* <p className="card-title">{Math.floor(calories) + 100} Caloris</p> */}
                <span className="card-text text-white bg-success rounded px-2 py-1">
                  {Math.floor(calories)} /- INR
                </span>
                <span className="card-text mx-1 text-secondary">
                  <s>{Math.floor(calories) + 300} INR</s>
                </span>
                <br />
              </div>
            </div>
          </Link>
        </div>
      );
    });
  return (
    <>
      <div className="row mx-auto pt-5">
        <p className="fs-1 fw-bold others">Food</p>
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
              <p className="fs-3 fw-bold">Recipe List</p>
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

export default Food;
