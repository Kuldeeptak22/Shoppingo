import React from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/images/cart.png";
import mainLogo from "../../assets/images/mainLogo.png";
import "./Header.scss";
const Header = () => {
  const dropit1 = () => {
    let drop = document.getElementById("dropit");
    let dropdown = document.getElementById("dropdownId");
    drop.classList.add("show");
    dropdown.classList.add("show");
  };
  const dropOut1 = () => {
    let drop = document.getElementById("dropit");
    let dropdown = document.getElementById("dropdownId");
    drop.classList.remove("show");
    dropdown.classList.remove("show");
  };
  const dropit2 = () => {
    let shopId = document.getElementById("shopId");
    let shopId2 = document.getElementById("shopId2");
    shopId.classList.add("show");
    shopId2.classList.add("show");
  };
  const dropOut2 = () => {
    let shopId = document.getElementById("shopId");
    let shopId2 = document.getElementById("shopId2");
    shopId.classList.remove("show");
    shopId2.classList.remove("show");
  };

  // const navItems = () => {
  // let navItem1 = document.getElementsByClassName("hello");
  // let navItem1 = document.getElementsByClassName("navbar-toggler");
  // if (navItem1.classList === "collapsed") {
  //   navItem1.classList.remove("collapsed");
  // } else {
  //   navItem1.classList.add("collapsed");
  // }
  // };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand main wrap" href="#">
            <img src={mainLogo} alt="logo" width="40px" />
            <span className="shoppingo fw-bold mx-2 ">Shoppingo</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navigate togglerNav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 listing">
              <li className="nav-item ">
                <Link to="/" className="nav-link" href="#">
                  HOME
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/products"
                  className="nav-link dropdown-toggle showing"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onMouseEnter={dropit1}
                  onMouseLeave={dropOut1}
                  id="dropit"
                >
                  PRODUCTS
                </Link>
                <ul
                  className="dropdown-menu"
                  id="dropdownId"
                  onMouseEnter={dropit1}
                  onMouseLeave={dropOut1}
                >
                  <li>
                    <Link to="/women" className="dropdown-item " href="#">
                      Women's
                    </Link>
                  </li>
                  <li>
                    <Link to="/men" className="dropdown-item " href="#">
                      Men's
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids" className="dropdown-item" href="#">
                      Kid's
                    </Link>
                  </li>
                  <li>
                    <Link to="/others" className="dropdown-item" href="#">
                      Others
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="shopId"
                  onMouseEnter={dropit2}
                  onMouseLeave={dropOut2}
                >
                  SHOP
                </Link>
                <ul
                  className="dropdown-menu"
                  id="shopId2"
                  onMouseEnter={dropit2}
                  onMouseLeave={dropOut2}
                >
                  <li>
                    <Link to="/myaccount" className="dropdown-item" href="#">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="dropdown-item" href="#">
                      Wish List
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item disabled" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contactus"
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex " role="search">
              <button className="btn btn-outline-success" type="submit">
                <span>
                  <i className="fa-duotone fa-magnifying-glass"></i>
                </span>
              </button>
            </form> */}
            <div className="mainCart">
              <img src={cart} alt="cart" width="30px" />
              <span className="text-white cart">1</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
