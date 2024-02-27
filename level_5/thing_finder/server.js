const express = require('express');
const app = express();

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
];

// GET route to get all items or filter by type
app.get('/items', (req, res) => {
    const { type } = req.query;
    let filteredItems = inventoryItems;
    if (type) {
        filteredItems = inventoryItems.filter(item => item.type === type);
    }
    res.json(filteredItems);
});

// GET route to filter by price range
app.get('/itemsByPrice', (req, res) => {
    const { minPrice = 0, maxPrice = 1000000 } = req.query;
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);
    const filteredItems = inventoryItems.filter(item => item.price >= min && item.price <= max);
    res.json(filteredItems);
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
