

function InventoryItem(props) {

    const {name, category, price, quantity} = props



    return ( 
        <div className="inventory-item">
            <h3>{name}</h3>
            <h4>{category}</h4>
            <p><b>Price:</b> ${price}</p>
            <p>{quantity} left</p>
        </div>
     );
}

export default InventoryItem;