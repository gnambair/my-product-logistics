import React from "react";
import "./styles.css";

const Card = (props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        className={`card border my-2 ${
          props.toggleDark === "light"
            ? "border-info bg-light cardHoverLight"
            : "border-info bg-dark cardHoverDark"
        }`}
        style={{ borderRadius: "5px" }}
      >
        <div className="card-body ">
          <div>
            <i className={`fas ${props.iconColorCls} ${props.icon} fa-2x `}></i>
            <h5
              className={`my-2 card-text description text-${
                props.toggleDark === "light" ? "dark" : "light"
              }`}
            >
              {props.value}
            </h5>
            <h6
              className={`card-title title my-2 text-${
                props.toggleDark === "light" ? "dark" : "light"
              }`}
            >
              {props.title}
            </h6>
            <p
              className={`card-text description my-2 text-${
                props.toggleDark === "light" ? "dark" : "light"
              }`}
            >
              {props.description}
            </p>
            <p
              className={`card-text description text-${
                props.toggleDark === "light" ? "secondary" : "light"
              }`}
            >
              Updated {props.updated}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
