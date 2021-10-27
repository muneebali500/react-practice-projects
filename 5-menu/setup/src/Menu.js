import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => (
        <div className="menu-item" key={item.id}>
          <img className="photo" src={item.img} alt="" />
          <div className="item-info">
            <header>
              <h4>{item.title}</h4> <div className="price">${item.price}</div>
            </header>
            <div className="item-text">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
