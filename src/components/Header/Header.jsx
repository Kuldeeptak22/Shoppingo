import React from "react";
import cart from "../../assets/images/cart.png";
import mainLogo from "../../assets/images/mainLogo.png";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand main wrap" href="#">
            <img src={mainLogo} alt="logo" width="40px" />
            <span className="shoppingo fw-bold mx-2 ">Shoppingo</span>
          </a>
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      WOMAN'S
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MEN'S
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      KID'S
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ACCESSORIES
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SHOP
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">BLOG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  CONTACT US
                </a>
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
