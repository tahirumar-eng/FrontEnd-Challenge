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
          <Link to="/" className="rando">
            RandoStore
          </Link>
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/add-items" className="nav-link">
                  Add Items
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/items" className="nav-link">
                  Items
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/checkout" className="nav-link">
                  <div className="relative">
                    <img src="./shopping.png" className="shopping-bag" />
                    <span className="count">{totalCount()}</span>
                  </div>
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
