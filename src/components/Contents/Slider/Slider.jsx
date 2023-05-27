import React from "react";
import "./Slider.scss";
// import slide1 from "../../../assets/images/slide1.jpg";
// import slide2 from "../../../assets/images/slide2.jpg";
// import slide3 from "../../../assets/images/slide3.jpg";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        // data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div
            class="carousel-item carousel-image bg-img-1 active"
            // data-bs-interval="2000"
          >
            <div>
              <p>50% OFF</p>
              <h1>WOMEN FASHION</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
          <div
            class="carousel-item carousel-image bg-img-2"
            // data-bs-interval="2000"
          ></div>
          <div
            class="carousel-item carousel-image bg-img-3"
            // data-bs-interval="2000"
          ></div>
          <div
            class="carousel-item carousel-image bg-img-4"
            // data-bs-interval="2000"
          ></div>
          <div
            class="carousel-item carousel-image bg-img-5"
            // data-bs-interval="2000"
          ></div>
          <div
            class="carousel-item carousel-image bg-img-6"
            // data-bs-interval="2000"
          ></div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
