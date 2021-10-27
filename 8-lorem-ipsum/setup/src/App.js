import React, { useState } from "react";
import data from "./data";
function App() {
  const [createPara, setCreatePara] = useState([]);
  const [value, setValue] = useState(0);

  function generatePara() {
    const newPara = data.slice(0, value);
    console.log(newPara);
    setCreatePara(newPara);
  }

  function handleChange(e) {
    const number = e.target.value;
    setValue(number);
  }

  return (
    <section>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={generatePara}>Generate</button>
      {createPara.map((para) => (
        <p>{para}</p>
      ))}
    </section>
  );
}

export default App;
