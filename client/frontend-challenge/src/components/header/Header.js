import { json } from "body-parser";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = ({ cart }) => {
  const totalCount = () => {
    let total = 0;
    for (const c of cart) {
      total += c.quantity;
    }
    return total;
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            RandoStore
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                  <a class="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/add-items">
                  <a class="nav-link" href="#">
                    Add Items
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/items">
                  <a class="nav-link" href="#">
                    Items
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/checkout">
                  {" "}
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <div className="relative">
                      <img src="./shopping.png" className="shopping-bag" />
                      <span className="count">{totalCount()}</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
