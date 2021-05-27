import React, { useReducer, useState } from "react";
import "./style.css";
import Item from "./Item";
import greenDone from "../images/greenComplete.svg";
import Title from './Title'

let i = 0;
function Container() {
  let initialState = { id: 0, work: "" };
  const [item, setItem] = useState(initialState);
  const [itemsList, setItemList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!item.work){
      alert('enter todu')
    }
    else{
      setItemList([...itemsList, { id: ++i, work: item.work }]);
      console.log(itemsList);
      setItem(initialState);

    }
  };
  
  const handleComplete = (itemId) => {
    const h = (document.getElementById(itemId).src = greenDone);
  };

  const handleDelete = (itemid) => {
    let itm = itemsList.find((i)=>i.id===itemid)
    if(window.confirm(`Delete item ${itm.work}?`)){
      let newList = itemsList.filter((item) => item.id !== itemid);
      setItemList(newList);
    }
    else{
      setItemList(itemsList)
    }
  };

  return (
    <React.Fragment>
      <Title total={itemsList.length} />
      <div id="container">
        <div id="input-item">
          <label>Add Item :</label>
          <input
            type="text"
            value={item.work}
            onChange={(e) => setItem({ ...item, work: e.target.value })}
          />
          <button id="submitBtn" onClick={handleSubmit}>
            Add
          </button>
        </div>
        <div id="items">
          {itemsList.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Container;
