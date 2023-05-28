import React from "react";
import "./Features.scss";
import feature1 from "../../../assets/images/feat1.png";
import feature2 from "../../../assets/images/feat2.png";

const Features = () => {
  return (
    <>
      <div className="row my-5 mx-5 mx-sm-2 features">
        <div className="col-md-6 mb-sm-3 mb-3 mb-sm-0 ">
          <div className="card feature1">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={feature1}
                  className="card-img-top  img-fluid shop"
                  alt="feature1"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body align">
                  <h5 className="card-title text-danger">Super Sale</h5>
                  <p className="card-text fw-bold fs-4">New Collection</p>
                  <p className="card-text text-secondary shopNow">Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card feature2">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={feature2}
                  className="card-img-top img-fluid shop"
                  alt="feature2"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body align">
                  <h5 className="card-title text-danger">Special offer</h5>
                  <p className="card-title fw-bold fs-4">New Collection</p>
                  <p className="card-text text-secondary shopNow">Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
