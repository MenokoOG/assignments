import { useParams } from "react-router-dom";

function InventoryItem(props) {
  const { inventory } = props;

  const { itemId } = useParams();

  const foundProduct = inventory.find((item) => item.id == itemId);

  return (
    <div className="page-container">
      <h1>{foundProduct.name}</h1>
      <h2>${foundProduct.price}</h2>
      <h3>{foundProduct.quantity} remaning!</h3>
    </div>
  );
}

export default InventoryItem