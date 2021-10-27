import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
          {data.map((question) => (
            <SingleQuestion title={question.title} detail={question.info} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
