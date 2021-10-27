import React, { useEffect } from "react";

const Alert = ({ info, type }) => {
  return <h2 className={`alert alert-${type}`}>{info}</h2>;
};

export default Alert;
