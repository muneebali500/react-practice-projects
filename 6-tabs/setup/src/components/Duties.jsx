import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Duties({ jobInfo }) {
  console.log(jobInfo);
  const { id, order, title, dates, company } = jobInfo;

  console.log({ title, dates, company });

  return (
    <>
      <div className="job-info">
        {console.log(`duties called`)}
        <h3>{title}</h3>
        <h4>{company}</h4>
      </div>
      <div className="job-date">{dates}</div>
      <div className="job-desc">
        <FaAngleDoubleRight />
        <p>heelo</p>
      </div>
    </>
  );
}
