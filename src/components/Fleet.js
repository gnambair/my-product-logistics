import React from "react";

const Fleet = (props) => {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Fleet Overview</h3>
      <div className="row mb-4">
        <div className="row">
          <div className="col-md-4">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrKHo-Jt-Co-k-_CxZW6PenLAjWQQNn6-Kw&s"
                width="300px"
                height="300px"
                alt=""
              />
            </div>
            <p
              className={`card-title my-2 text-${
                props.toggleDark === "light" ? "dark" : "light"
              }`}
            >
              This image features a large cargo truck on the highway,
              highlighting the backbone of long-distance freight transportation.
              The truck is built for heavy loads and long hauls, showcasing the
              strength and reliability essential for fleet operations in
              logistics. Its robust design ensures safe and efficient delivery
              of goods across regions.
            </p>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src="https://www.defensenews.com/resizer/v2/DEGMHIMJDFCQDDGJFHIGKCDROM.jpg?auth=d833174fd652e99372c72ef18575dfde774a7772e381fb562e73217697f92df0&width=1512&height=1008"
                width="300px"
                height="300px"
                alt=""
              />
            </div>
            <p
              className={`card-title my-2 text-${
                props.toggleDark === "light" ? "dark" : "light"
              }`}
            >
              This image showcases a modern tactical logistics vehicle designed
              for rugged terrain and high-load military transport. Equipped with
              all-terrain tires, reinforced armor, and modular cargo space, it
              exemplifies operational readiness in defense logistics.
            </p>
          </div>

          <div className="col-md-4">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OYQYWXUWDNu7AnRXMLGdby-e6QqcVS1_dw&s"
                width="300px"
                height="300px"
                alt=""
              />
            </div>
            <p
              className={`card-title my-2 text-${
                props.toggleDark === "light" ? "dark" : "light"
              }`}
            >
              This image shows a sleek, modern delivery van parked in an urban
              setting, symbolizing the last-mile delivery aspect of fleet
              operations. The van is compact and designed for efficient
              navigation through city streets, making it ideal for quick and
              reliable parcel deliveries. Its clean design reflects the
              importance of sustainability and efficiency in today's logistics
              fleets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
