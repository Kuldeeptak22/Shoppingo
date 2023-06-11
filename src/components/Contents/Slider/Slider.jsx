import React from "react";
import "./Slider.scss";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item carousel-image bg-img-1 active"
            data-bs-interval="2000"
          >
            <div className="mx-5 my-4 content">
              <p className="fs-3">50% OFF </p>
              <h1 className="women">WOMEN FASHION</h1>
              <button className="button mx-md-5">SHOP NOW</button>
            </div>
          </div>
          <div
            className="carousel-item carousel-image bg-img-2"
            data-bs-interval="2000"
          >
            <div className="mx-5 my-4 content menFashion">
              <p className="fs-3 mx-5 text-white offer">70% OFF</p>
              <h1 className="men">MEN FASHION</h1>
              <button className="button mx-5">SHOP NOW</button>
            </div>
          </div>
          <div
            className="carousel-item carousel-image bg-img-3"
            data-bs-interval="2000"
          ></div>
          <div
            className="carousel-item carousel-image bg-img-4"
            data-bs-interval="2000"
          ></div>
          <div
            className="carousel-item carousel-image bg-img-5"
            data-bs-interval="2000"
          >
            <div className="mx-5 my-4 content menFashion">
              <p className="fs-3 mx-5 text-white offer">90% OFF</p>
              <h1 className="children">CHILDREN FASHION</h1>
              <button className="button mx-5">SHOP NOW</button>
            </div>
          </div>
          <div
            className="carousel-item carousel-image bg-img-6"
            data-bs-interval="2000"
          ></div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
