import React from "react";
import "./SummerCollection.scss";
import summerLady from "../../../assets/images/summerLady.png";
import summerMale from "../../../assets/images/summerMale.png";

const SummerCollection = () => {
  return (
    <>
      <div className="row summer my-5 mx-auto">
        <div className="col-md-4 col-12 sum mx-auto">
          <img src={summerMale} alt="summerMale" className="img-fluid" />
        </div>
        <div className="col-md-8 sum">
          <div className="row summerfeat">
            <div className="col-12">
              <p className="text-danger fs-4">New season trends!</p>
            </div>
            <div className="col-12">
              <p className="fw-bold fs-1">Best Summer Collection</p>
            </div>
            <div className="col-12">
              <p>Sale Get up to 50% Off</p>
            </div>
            <div className="col-12">
              <button className="button">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummerCollection;
