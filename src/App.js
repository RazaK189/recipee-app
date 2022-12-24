import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import StyledLayout from "./components/StyledLayout";
import Search from "./components/Search";
import Item from './components/Item';
import { dishes } from './data/data';

import Create from "./components/CreateMenu";
import Home from "./components/Home";
import List from "./components/ShoppingList";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="" element={<StyledLayout />}>
          <Route path="/" element={<Home />} />
          <Route path='/ShoppingList' element={<List />} />
          <Route path='/CreateMenu' element={<Create />} />
          <Route path="/Search" element={<Search dish={dishes} />}>
          <Route path=":itemId" element={<Item Dishes={dishes} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
