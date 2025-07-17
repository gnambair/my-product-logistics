import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const [isFlyoutopened, setisFlyoutopened] = useState(false);

  return (
    <div
      className={`bg-${
        props.toggleDark === "light" ? "info" : "dark"
      } text-white position-fixed top-0 start-0 h-100 p-2`}
      style={{
        width: isFlyoutopened ? "250px" : "80px",
        transition: "width 0.3s ease",
        zIndex: 1000,
        //overflowX: 'hidden',
        whiteSpace: "nowrap",
        marginTop: "56px",
      }}
      onMouseEnter={() => setisFlyoutopened(true)}
      onMouseLeave={() => setisFlyoutopened(false)}
    >
      <div className="d-flex flex-column align-items-start">
        <div className="mb-4 text-center w-100"></div>

        <ul className="list-unstyled w-100">
          <li className="mb-4">
            <NavLink
              to="/"
              className="text-white text-center text-decoration-none d-block menuHover fw-semibold"
            >
              <i className="fas fa-dashboard mx-2"></i>
              {isFlyoutopened && "Dashboard"}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/shipments"
              className="text-white text-center text-decoration-none d-block menuHover fw-semibold"
            >
              <i className="fas fa-box mx-2"></i>
              {isFlyoutopened && "Shipments"}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/fleet"
              className="text-white text-center text-decoration-none d-block menuHover fw-semibold"
            >
              <i className="fas fa-warehouse mx-2"></i>
              {isFlyoutopened && "Fleet"}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/reports"
              className="text-white text-center text-decoration-none d-block menuHover fw-semibold"
            >
              <i className="fas fa-chart-line mx-2"></i>
              {isFlyoutopened && "Reports"}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/settings"
              className="text-white text-center text-decoration-none d-block menuHover fw-semibold"
            >
              <i className="fas fa-cog mx-2"></i>
              {isFlyoutopened && "Settings"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
