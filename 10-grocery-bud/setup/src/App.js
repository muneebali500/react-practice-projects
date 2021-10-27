import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const initialValues = JSON.parse(localStorage.getItem(`items`)) || [];

function App() {
  const [name, setName] = useState(``);
  const [items, setItems] = useState(initialValues);
  const [btn, setBtn] = useState(true);
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState({ info: ``, type: `` });

  useEffect(() => {
    console.log(`use Effect called`);
    const timeOut = setTimeout(() => {
      setMessage({ info: ``, type: `` });
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [message]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return setMessage({ info: `Please Enter Values`, type: `danger` });
    }

    if (btn) {
      setItems([...items, name]);
    } else {
      items.splice(index, 1, name);
      setItems([...items]);
    }

    setName(``);
    setBtn(true);

    setMessage(
      btn
        ? { info: `New Item Added to the List`, type: `success` }
        : { info: `Value Changed`, type: `success` }
    );
  }

  function deleteItem(name) {
    const newItems = items.filter((item) => item !== name);
    setItems(newItems);
    setMessage({ info: `Item Removed`, type: `danger` });
  }

  function editItem(name) {
    const item = items.find((item) => item === name);

    setName(item);
    setBtn(false);
    setIndex(items.indexOf(item));
  }

  function clearItems() {
    setItems([]);
    setMessage({ info: `Empty List`, type: `danger` });
  }

  // useEffect(() => {
  //   console.log(`local use called`);
  //   localStorage.setItem("items", JSON.stringify(items));
  // }, [items]);

  function updateLocalStorage() {
    localStorage.setItem(`items`, JSON.stringify(items));
  }

  updateLocalStorage();

  return (
    <main>
      <section className="section-center">
        <Alert {...message} />
        <form onSubmit={handleSubmit} className="grocery-form">
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input
              onChange={handleChange}
              type="text"
              placeholder="e.g. eggs"
              value={name}
              className="grocery"
            />
            <button className="submit-btn">{btn ? `Submit` : `Edit`}</button>
          </div>
        </form>
        <div className="grocery-container">
          {items.map((item, index) => (
            <List
              item={item}
              key={index}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          ))}
        </div>
        <button className="clear-btn" onClick={clearItems}>
          Clear Items
        </button>
      </section>
    </main>
  );
}

export default App;
