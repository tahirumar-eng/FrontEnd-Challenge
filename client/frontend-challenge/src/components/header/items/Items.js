import React from "react";
import { useEffect, useState } from "react";
import Item from "../item/Item";
import axios from "axios";
const Items = ({ onAdd }) => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/items")
      .then((res) => {
        setItem([...res.data.map((r) => ({ ...r, quantity: 1 }))]);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => {
          return (
            <div className="col-md-4">
              <Item item={item} key={item.id} onAdd={onAdd} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Items;
