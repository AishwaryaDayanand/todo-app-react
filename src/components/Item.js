import React from 'react'
import "./style.css";
import deleteIcon from "../images/delete.svg";
import done from "../images/Done.svg";
function Item({ item, handleDelete, handleComplete }) {
  let id = item.id;
  return (
    <div className="item">
      <div id="item-name">
        <h1 style={{ margin: 10 }}>{item.id}. </h1>
        <h1>{item.work} </h1>
      </div>
      <div id="delete-done">
        <img
          onClick={() => handleDelete(id)}
          className="delete"
          src={deleteIcon}
        />
        <img
          id={item.id}
          onClick={() => handleComplete(id)}
          className="delete"
          src={done}
        />
      </div>
    </div>
  );
}

export default Item
