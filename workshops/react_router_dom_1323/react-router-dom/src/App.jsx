import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import InventoryItem from "./components/InventoryItem";


 function App() {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Widget",
      quantity: 20,
      price: 9.99,
    },
    {
      id: 2,
      name: "Gadget",
      quantity: 15,
      price: 24.5,
    },
    {
      id: 3,
      name: "Tool",
      quantity: 8,
      price: 12.75,
    },
    {
      id: 4,
      name: "Accessory",
      quantity: 30,
      price: 5.99,
    },
    {
      id: 5,
      name: "Device",
      quantity: 12,
      price: 49.99,
    },
  ]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/item" element={<Inventory inventory={inventory} />} />
        <Route
          path="/item/:itemId"
          element={<InventoryItem inventory={inventory} />}
        />
      </Routes>
    </div>
  );
}

export default App
