import React from "react";

export default function Companies({ showJobInfo }) {
  return (
    <div className="btn-container">
      <button className="job-btn" onClick={showJobInfo}>
        Tommy
      </button>
      <button className="job-btn" onClick={showJobInfo}>
        Bigdrop
      </button>
      <button className="job-btn" onClick={showJobInfo}>
        Cuker
      </button>
    </div>
  );
}
