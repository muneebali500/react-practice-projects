import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, detail }) => {
  const [showPara, setShowPara] = useState(false);

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setShowPara(!showPara);
          }}
        >
          {btn ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showPara && <p>{detail}</p>}{" "}
    </div>
  );
};

export default Question;
