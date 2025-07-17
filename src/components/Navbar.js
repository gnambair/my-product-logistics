import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          props.toggleDark === "light"
            ? "navbar-light bg-info-subtle"
            : "navbar-dark bg-secondary"
        }`}
      >
        <div className="container-fluid">
          <div
            className="navbar-collapse d-flex justify-content-between w-100"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <a class="nav-link active" aria-current="page" href="/">
                <i className="fas fa-truck"></i> Transportation Logistics
              </a>
            </ul>

            <div class="btn-group mx-3">
              <NavLink to="/">
                <i
                  className={`fas fa-bell text-${
                    props.toggleDark === "light" ? "dark" : "light"
                  } me-1`}
                  style={{ fontSize: "1.2rem", cursor: "pointer" }}
                ></i>
              </NavLink>
            </div>

            <div className="mx-2 separatorParent">
              <span className="separatorChild border"></span>
            </div>

            <div className="mx-4">
              <i
                className={`fas ${
                  props.toggleDark === "light" ? "fa-moon" : "fa-sun"
                } text-${props.toggleDark === "light" ? "dark" : "light"}`}
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={props.handleOnchange}
                title={
                  props.toggleDark === "light"
                    ? "Enable Dark Mode"
                    : "Enable Light Mode"
                }
              ></i>
            </div>
            <div className="mx-2">
              <span className="separatorChild border"></span>
            </div>

            <div className="dropdown mx-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Avatar"
                className="rounded-circle"
                id="userDropdown"
                data-bs-toggle="dropdown"
                style={{
                  width: "35px",
                  height: "35px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userDropdown"
              >
                <li>
                  <NavLink className="dropdown-item" to="/settings">
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
