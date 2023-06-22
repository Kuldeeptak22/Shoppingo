import React from "react";
import "./Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckField,
  faHandHoldingDollar,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <>
      <div className="row d-flex justify-content-around text-center my-auto py-5 mx-auto">
        <div className="col-md-3 my-2">
          <FontAwesomeIcon
            icon={faTruckField}
            className="fs-1 text-secondary my-2"
          />
          <h5>Free Delivery</h5>
          <p>
            If you are going to use of Lorem, you need to be sure there anything
          </p>
        </div>
        <div className="col-md-3 my-2 midService">
          <FontAwesomeIcon
            icon={faHandHoldingDollar}
            className="fs-1 text-secondary my-2"
          />
          <h5>30 Day Return</h5>
          <p>
            If you are going to use of Lorem, you need to be sure there anything
          </p>
        </div>
        <div className="col-md-3 my-2">
          <FontAwesomeIcon
            icon={faHeadset}
            className="fs-1 text-secondary my-2"
          />
          <h5>24/7 Support</h5>
          <p>
            If you are going to use of Lorem, you need to be sure there anything
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
