import React from "react";

const Reports = (props) => {
  return (
    <div className="container mt-5 pt-5">
      <h5 className={`text-${props.toggleDark === "light" ? "dark" : "light"}`}>
        These are the reports which give you an idea about the status of
        shipments
      </h5>
      <div className="row mt-4">
        <div
          className={`card border-info mt-4 bg-${
            props.toggleDark === "light" ? "light" : "dark"
          }`}
        >
          <div className="card-body">
            <h5
              className={`card-title text-${
                props.toggleDark === "light" ? "dark" : "light"
              }`}
            >
              System Alerts
            </h5>
            <div className="alert alert-danger" role="alert">
              <i
                className={`fas fa-exclamation-triangle text-danger fa-1x me-2`}
              ></i>
              <span>Shipment #1045 delayed due to weather.</span>
            </div>
            <div className="alert alert-warning" role="alert">
              <i className={`fas fa-tools text-warning fa-1x me-2`}></i>
              <span>Vehicle #TX-32 needs maintenance.</span>
            </div>
            <div className="alert alert-info" role="alert">
              <i className={`fas fa-user-plus text-info fa-1x me-2`}></i>
              <span>New driver assigned to Route A1.</span>
            </div>
          </div>
        </div>

        <div
          className={`card border-info mt-4 bg-${
            props.toggleDark === "light" ? "light" : "dark"
          }`}
        >
          <div className="card-body">
            <h5
              className={`card-title text-${
                props.toggleDark === "light" ? "dark" : "light"
              }`}
            >
              Live Activity Feed
            </h5>
            <ul
              className={`list-group list-group-flush ${
                props.toggleDark === "light" ? "tableBglight" : "tableBgdark"
              }`}
            >
              <li className="list-group-item d-flex align-items-center gap-2">
                <i className="fas fa-check-circle text-success"></i>
                <span>Shipment #1082 delivered to San Diego</span>
              </li>
              <li className="list-group-item d-flex align-items-center gap-2">
                <i className="fas fa-truck-moving text-primary"></i>
                <span>Vehicle #TX-22 departed at 9:15 AM</span>
              </li>
              <li className="list-group-item d-flex align-items-center gap-2">
                <i className="fas fa-box text-secondary"></i>
                <span>New shipment created for Order #9011</span>
              </li>
              <li className="list-group-item d-flex align-items-center gap-2">
                <i className="fas fa-tools text-warning"></i>
                <span>Maintenance scheduled for Vehicle #VA-77</span>
              </li>
              <li className="list-group-item d-flex align-items-center gap-2">
                <i className="fas fa-warehouse text-info"></i>
                <span>Shipment #1056 arrived in warehouse</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
