import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faMobileButton,
} from "@fortawesome/free-solid-svg-icons";
import mainLogo from "../../assets/images/mainLogo.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white list-style-none pt-5 footer">
      <div className="row d-flex justify-content-evenly">
        <div className="col-lg-2">
          <ul className="footname">
            <div className="d-lg-flex logoo">
              <img
                className="align-items-start"
                src={mainLogo}
                alt="logo"
                width="30px"
              />
              <span className="fw-bold shoppingo fs-5 mx-2">Shoppingo</span>
            </div>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              autem impedit consectetur unde quisquam quibusdam animi est
              tempora ducimus architecto doloremque totam accusantium adipisci
              fugit sed placeat recusandae tenetur laudantium.
            </li>
            <li>
              <ul className="d-lg-flex  justify-content-between socialmedia ">
                <li className="fs-5">
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li className="fs-5">
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="fs-5">
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </li>
                <li className="fs-5">
                  <FontAwesomeIcon icon={faYoutube} />
                </li>
                <li className="fs-5">
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-lg-2">
          <ul className="links align-items-start">
            <span className="fw-bold footing fs-lg-5">Useful Links</span>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Location</li>
            <li>Affiliates</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-lg-2 ">
          <ul className="links">
            <span className="fw-bold fs-lg-5">Category</span>
            <li>Men</li>
            <li>Woman</li>
            <li>Kids</li>
            <li>Best Saller</li>
            <li>New Arrivals</li>
          </ul>
        </div>
        <div className="col-lg-2 ">
          <ul className="links">
            <span className="fw-bold fs-lg-5">My Account</span>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>
        <div className="col-lg-2 ">
          <ul className="links">
            <span className="fw-bold fs-lg-5">Contact Info</span>
            <li className="d-lg-flex">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span className="mx-2">
                Om Bhawan, Amli Road,
                <span className="mx-3 wrap">Pindwara, Sirohi, Raj. 307022</span>
              </span>
            </li>
            <li className="d-lg-flex">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="mx-2 wrap">kuldeeptak2211@gmail.com</span>
            </li>
            <li className="d-lg-flex">
              <span>
                <FontAwesomeIcon icon={faMobileButton} />
              </span>
              <span className="mx-2">+91-9664408473</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-5">
        © 2023 All Rights Reserved by Shoppingo
      </div>
    </div>
  );
};

export default Footer;
