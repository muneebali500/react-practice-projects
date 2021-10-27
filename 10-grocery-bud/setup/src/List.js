import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ item, deleteItem, editItem }) => {
  return (
    <article className="grocery-item">
      <p className="title">{item}</p>
      <div>
        <button className="edit-btn" onClick={() => editItem(item)}>
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={() => deleteItem(item)}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
