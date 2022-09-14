import React from "react";

export default function ItemCard(params) {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <div className="item-info">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-less"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="item-more" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
