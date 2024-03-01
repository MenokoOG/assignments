import React from 'react';
import InventoryForm from './components/InventoryForm';
import InventoryList from './components/InventoryList';

function App() {
  return (
    <div>
        <h1>Menoko OG CRUD App</h1>
      <InventoryForm />
      <InventoryList />
    </div>
  );
}

export default App;
