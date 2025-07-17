import React from "react";

const Shipments = (props) => {
  return (
    <div className="container mt-4">
      <h4 className="mb-4">Recent Shipments</h4>
      <div className="card-body">
        <h5
          className={`card-title mb-3 text-${
            props.toggleDark === "light" ? "dark" : "light"
          }`}
        >
          Breakdown of all successfully delivered shipment's performace
        </h5>
        <ul
          className={`list-group list-group-flush ${
            props.toggleDark === "light" ? "tableBglight" : "tableBgdarkModal"
          }`}
        >
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1001
            <span className="badge bg-success">Delivered</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1002
            <span className="badge bg-warning text-dark">In Transit</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1003
            <span className="badge bg-danger">Delayed</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1001
            <span className="badge bg-success">Delivered</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1002
            <span className="badge bg-warning text-dark">In Transit</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1003
            <span className="badge bg-danger">Delayed</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1001
            <span className="badge bg-success">Delivered</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1002
            <span className="badge bg-warning text-dark">In Transit</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1003
            <span className="badge bg-danger">Delayed</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1001
            <span className="badge bg-success">Delivered</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1002
            <span className="badge bg-warning text-dark">In Transit</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1003
            <span className="badge bg-danger">Delayed</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1001
            <span className="badge bg-success">Delivered</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1002
            <span className="badge bg-warning text-dark">In Transit</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1003
            <span className="badge bg-danger">Delayed</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1001
            <span className="badge bg-success">Delivered</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1002
            <span className="badge bg-warning text-dark">In Transit</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Shipment #1003
            <span className="badge bg-danger">Delayed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shipments;
