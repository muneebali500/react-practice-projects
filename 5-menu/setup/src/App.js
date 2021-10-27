import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  function filterItems(e) {
    if (e.target.textContent === `All`) {
      setMenuItems(items);
      return;
    }

    const filteredItems = items.filter(
      (item) => item.category === e.target.textContent.toLowerCase()
    );
    setMenuItems(filteredItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
