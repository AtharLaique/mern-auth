import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          MERN AUTH
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse container" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item active">
              <Link class="nav-link" to="/signup">
                Signup <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/login">
                Login <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
