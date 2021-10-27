import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={filterItems}>
        All
      </button>
      <button className="filter-btn" onClick={filterItems}>
        Breakfast
      </button>
      <button className="filter-btn" onClick={filterItems}>
        Lunch
      </button>
      <button className="filter-btn" onClick={filterItems}>
        Shakes
      </button>
    </div>
  );
};

export default Categories;
