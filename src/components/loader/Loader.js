import React from "react";

const Loader = ({ color, containerWidth = "100%" }) => (
  <div className="loader-wrapper" style={{ width: containerWidth }}>
    <div className="lds-ellipsis">
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
    </div>
  </div>
);

export default Loader;
