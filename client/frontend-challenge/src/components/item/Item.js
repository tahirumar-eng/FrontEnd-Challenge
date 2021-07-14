import React from "react";
import "./Item.css";
const Item = ({ item, onAdd }) => {
  return (
    <div className="mt-5">
      <div>
        <div>
          <img
            src={
              item.img
                ? `http://localhost:3000/${item.img}`
                : "https://i.gadgets360cdn.com/large/canon_eos_r5_image_1594366986226.jpg?downsize=950:*&output-quality=80"
            }
            alt={item.img}
            className="product-image"
          />
          <h6>{item.name}</h6>
          <p>Price: {item.price}</p>
          <button
            className="btn btn-success btn-sm "
            onClick={() => onAdd(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
