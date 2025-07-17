import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./styles.css";

const DashCard = (props) => {
  const [activeCard, setActiveCard] = useState(null);
  const [data, setdata] = useState({
    totalShipments: 0,
    delivered: 0,
    transit: 0,
    delayed: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setdata({
        totalShipments: 100,
        delivered: 56,
        transit: 698,
        delayed: 321,
      });
    }, 3000);
  }, []);
  return (
    <div className="DashCardSpacing">
      <div className="container">
        <h3
          className={`mt-5 pt-4 text-${
            props.toggleDark === "light" ? "dark" : "light"
          }`}
        >
          Hello, Harvey Specter!
        </h3>
        <h6
          className={`my-2 text-${
            props.toggleDark === "light" ? "dark" : "light"
          }`}
        >
          This is your dashboard
        </h6>
        <div className="row mt-4">
          <div className="col-md-3">
            <Card
              title="Total Shipments"
              iconColorCls="text-secondary"
              onClick={() => setActiveCard("shipments")}
              icon="fa-box"
              description="All shipments processed so far."
              updated="5 mins ago..."
              value={data.totalShipments}
              toggleDark={props.toggleDark}
            />
          </div>

          <div className="col-md-3">
            <Card
              title="Delivered"
              iconColorCls="text-success"
              onClick={() => setActiveCard("delivered")}
              icon="fa-check-circle"
              description="Successfully delivered to customers."
              updated="15 mins ago..."
              value={data.delivered}
              toggleDark={props.toggleDark}
            />
          </div>
          <div className="col-md-3">
            <Card
              title="In Transit"
              iconColorCls="text-warning"
              onClick={() => setActiveCard("transit")}
              icon="fa-truck"
              description="Currently in route   destination."
              updated="1 day ago..."
              value={data.transit}
              toggleDark={props.toggleDark}
            />
          </div>
          <div className="col-md-3">
            <Card
              title="Delayed"
              iconColorCls="text-danger"
              onClick={() => setActiveCard("delayed")}
              icon="fa-clock"
              description="Shipments that are currently delayed."
              updated="2 days ago..."
              value={data.delayed}
              toggleDark={props.toggleDark}
            />
          </div>
        </div>

        {activeCard && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-lg">
              <div
                className={`modal-content ${
                  props.toggleDark === "light" ? "bg-light" : "bg-secondary"
                }`}
              >
                <div className="modal-header">
                  <h5
                    className={`modal-title text-${
                      props.toggleDark === "light" ? "dark" : "light"
                    }`}
                  >
                    {activeCard === "shipments" && "Total Shipments"}
                    {activeCard === "delivered" && "Delivered Shipments"}
                    {activeCard === "transit" && "In Transit Shipments"}
                    {activeCard === "delayed" && "Delayed Shipments"}
                  </h5>
                  <button
                    type="button"
                    className={`btn-close ${
                      props.toggleDark === "light"
                        ? "btn-close-dark"
                        : "btn-close-white"
                    }`}
                    onClick={() => setActiveCard(null)}
                  ></button>
                </div>

                <div className="modal-body">
                  {activeCard === "shipments" && (
                    <div className="card-body">
                      <h5
                        className={`card-title mb-3 text-${
                          props.toggleDark === "light" ? "dark" : "light"
                        }`}
                      >
                        Breakdown of all successfully delivered shipment's
                        performace
                      </h5>
                      <ul
                        className={`list-group list-group-flush ${
                          props.toggleDark === "light"
                            ? "tableBglight"
                            : "tableBgdarkModal"
                        }`}
                      >
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Shipment #1001
                          <span className="badge bg-success">Delivered</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Shipment #1002
                          <span className="badge bg-warning text-dark">
                            In Transit
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Shipment #1003
                          <span className="badge bg-danger">Delayed</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  {activeCard === "delivered" && (
                    <div className="card-body">
                      <h5
                        className={`card-title mb-3 text-${
                          props.toggleDark === "light" ? "dark" : "light"
                        }`}
                      >
                        Delivery Performance
                      </h5>

                      <p
                        className={`mb-1 text-${
                          props.toggleDark === "light" ? "dark" : "light"
                        }`}
                      >
                        On-Time Deliveries
                      </p>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          85%
                        </div>
                      </div>

                      <p
                        className={`mb-1 text-${
                          props.toggleDark === "light" ? "dark" : "light"
                        }`}
                      >
                        Delayed Deliveries
                      </p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          15%
                        </div>
                      </div>
                    </div>
                  )}
                  {activeCard === "transit" && (
                    <div className="card-body">
                      <h5
                        className={`card-title mb-3 text-${
                          props.toggleDark === "light" ? "dark" : "light"
                        }`}
                      >
                        Check the vehicles in transit.
                      </h5>
                      <ul
                        className={`list-group list-group-flush ${
                          props.toggleDark === "light"
                            ? "tableBglight"
                            : "tableBgdarkModal"
                        }`}
                      >
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Shipment #1001
                          <span className="badge bg-success">Delivered</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Shipment #1002
                          <span className="badge bg-warning text-dark">
                            In Transit
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Shipment #1003
                          <span className="badge bg-danger">Delayed</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  {activeCard === "delayed" && (
                    <div className="card-body">
                      <h5
                        className={`card-title mb-3 text-${
                          props.toggleDark === "light" ? "dark" : "light"
                        }`}
                      >
                        Check the number of delayed deliveries.
                      </h5>
                      <ul
                        className={`list-group list-group-flush ${
                          props.toggleDark === "light"
                            ? "tableBglight"
                            : "tableBgdarkModal"
                        }`}
                      >
                        <li className="list-group-item">
                          <strong>10:00 AM</strong> – Chicago to Detroit –{" "}
                          <span className="text-success fw-bold">
                            Scheduled
                          </span>
                        </li>
                        <li className="list-group-item">
                          <strong>12:30 PM</strong> – NYC to Boston –{" "}
                          <span className="text-warning">Pending</span>
                        </li>
                        <li className="list-group-item">
                          <strong>3:15 PM</strong> – Houston to Dallas –{" "}
                          <span className="text-muted">Not Dispatched</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row mt-4">
          <div className="col-md-6">
            <div
              className={`card border-info mt-4 bg-${
                props.toggleDark === "light" ? "light" : "dark"
              }`}
            >
              <div className={`card-body`}>
                <h5
                  className={`card-title text-${
                    props.toggleDark === "light" ? "dark" : "light"
                  }`}
                >
                  Recent Shipments
                </h5>
                <ul
                  className={`list-group list-group-flush ${
                    props.toggleDark === "light"
                      ? "tableBglight"
                      : "tableBgdark"
                  }`}
                >
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Shipment #1001
                    <span className="badge bg-success">Delivered</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Shipment #1002
                    <span className="badge bg-warning text-dark">
                      In Transit
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Shipment #1003
                    <span className="badge bg-danger">Delayed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
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
                  Top Performing Drivers
                </h5>
                <ul
                  className={`list-group list-group-flush ${
                    props.toggleDark === "light"
                      ? "tableBglight"
                      : "tableBgdark"
                  }`}
                >
                  <li className="list-group-item">John Doe — 24 Deliveries</li>
                  <li className="list-group-item">
                    Jane Smith — 21 Deliveries
                  </li>
                  <li className="list-group-item">Ali Khan — 19 Deliveries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
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
                  Delivery Performance
                </h5>

                <p
                  className={`mb-1 text-${
                    props.toggleDark === "light" ? "dark" : "light"
                  }`}
                >
                  On-Time Deliveries
                </p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>

                <p
                  className={`mb-1 text-${
                    props.toggleDark === "light" ? "dark" : "light"
                  }`}
                >
                  Delayed Deliveries
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "15%" }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    15%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
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
                  Upcoming Deliveries
                </h5>
                <ul
                  className={`list-group list-group-flush ${
                    props.toggleDark === "light"
                      ? "tableBglight"
                      : "tableBgdark"
                  }`}
                >
                  <li className="list-group-item">
                    <strong>10:00 AM</strong> – Chicago to Detroit –{" "}
                    <span className="text-success">Scheduled</span>
                  </li>
                  <li className="list-group-item">
                    <strong>12:30 PM</strong> – NYC to Boston –{" "}
                    <span className="text-warning">Pending</span>
                  </li>
                  <li className="list-group-item">
                    <strong>3:15 PM</strong> – Houston to Dallas –{" "}
                    <span className="text-secondary">Not Dispatched</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
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
                    props.toggleDark === "light"
                      ? "tableBglight"
                      : "tableBgdark"
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
      </div>
    </div>
  );
};

export default DashCard;
