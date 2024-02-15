import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

 function Inventory(props) {
  const { inventory } = props;

  const navigate = useNavigate();

  function handleClick(itemId) {
    navigate(`/item/${itemId}`);
  }

  const inventoryList = inventory.map((item) => {
    return (
      <div
        onClick={() => handleClick(item.id)}
        key={item.id}
        className="inventoryItem"
      >
        <h2>{item.name}</h2>
        <h2>${item.price}</h2>
      </div>
    );
  });

  return (
    <div className="page-container">
      <h1 style={{ marginBottom: "15px" }}>Inventory</h1>
      <div className="inventoryDiv">{inventoryList}</div>
    </div>
  );
}
export default Inventory