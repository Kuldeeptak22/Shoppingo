import React from "react";
import "./Clients.scss";
import client1 from "../../../assets/images/clients/client1.jpg";
import client2 from "../../../assets/images/clients/client2.jpg";
import client3 from "../../../assets/images/clients/client3.jpg";
import client4 from "../../../assets/images/clients/client4.jpg";

const Clients = () => {
  return (
    <>
      <div className="row text-center clients my-5 py-5 mx-auto">
        <div className="col-12 mx-auto">
          <p className="fs-3 fw-bold">Our Client Say!</p>
        </div>
        <div className="col-12 pb-5">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active row">
                <div>
                  <p className="mx-5 my-3 text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, rem rerum harum culpa nostrum et quas doloremque
                    dolorem quam ex, qui cupiditate quia sint fugit id nemo!
                    Culpa, error at.
                  </p>
                </div>
                <div className="col-12">
                  <div className="row mx-auto">
                    <div className="col-6">
                      <img
                        src={client1}
                        className="d-block imgWidth"
                        alt="client1"
                      />
                    </div>
                    <div className="col-6 text-start my-auto">
                      <p className="text-danger fw-bold">Yoselli jothao</p>
                      <p className="text-success">Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <p className="mx-5 my-3 text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, rem rerum harum culpa nostrum et quas doloremque
                    dolorem quam ex, qui cupiditate quia sint fugit id nemo!
                    Culpa, error at.
                  </p>
                </div>
                <div className="col-12">
                  <div className="row mx-auto">
                    <div className="col-6">
                      <img
                        src={client2}
                        className="d-block imgWidth"
                        alt="client2"
                      />
                    </div>
                    <div className="col-6 text-start my-auto">
                      <p className="text-danger fw-bold">Roman Rings</p>
                      <p className="text-success">Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <p className="mx-5 my-3 text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, rem rerum harum culpa nostrum et quas doloremque
                    dolorem quam ex, qui cupiditate quia sint fugit id nemo!
                    Culpa, error at.
                  </p>
                </div>
                <div className="col-12">
                  <div className="row mx-auto">
                    <div className="col-6">
                      <img
                        src={client3}
                        className="d-block imgWidth"
                        alt="client3"
                      />
                    </div>
                    <div className="col-6 text-start my-auto">
                      <p className="text-danger fw-bold">Kuldeep tak</p>
                      <p className="text-success">Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <p className="mx-5 my-3 text-secondary">
                    culpa nostrum possimus quo ad mollitia? Minus laborum enim
                    inventore nulla accusantium illo soluta quos molestias,
                    molestiae dolore, recusandae rem ratione aliquam excepturi?
                  </p>
                </div>
                <div className="col-12">
                  <div className="row mx-auto">
                    <div className="col-6">
                      <img
                        src={client4}
                        className="d-block imgWidth"
                        alt="client4"
                      />
                    </div>
                    <div className="col-6 text-start my-auto">
                      <p className="text-danger fw-bold">Arijit Singh</p>
                      <p className="text-success">Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
