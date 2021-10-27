import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

  const { image, name, title, quote } = people[index];
  // const [slide, setSlide] = useState(false);

  function nextSlide() {
    let newIndex = index + 1;
    if (newIndex > data.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
    // setSlide(true);
  }

  function prevSlide() {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = data.length - 1;
    }
    setIndex(newIndex);
    // setSlide(true);
  }

  useEffect(() => {
    const slider = setInterval(() => {
      let newIndex = index + 1;
      if (newIndex > data.length - 1) {
        newIndex = 0;
      }
      setIndex(newIndex);
    }, 2000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>Reviews</h2>
        <span></span>
      </div>
      <div className="section-center">
        <article className="activeSlide">
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <div className="title">{title}</div>
          <p className="text">{quote}</p>
          <div className="icon">
            <FaQuoteRight />{" "}
          </div>
        </article>

        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
