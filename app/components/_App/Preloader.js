import React from "react";

const Preloader = () => {
  return (
    <div className="loader-content">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
