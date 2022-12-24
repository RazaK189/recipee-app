import React from "react";
import CreateList from "../components/CreateList";
import "./create.css"

function ShoppingList() {
  return (
    <div className="create">
      <h1>Create Your Own Shopping List</h1>
      <CreateList />
   
    </div>
  );
}

export default ShoppingList;