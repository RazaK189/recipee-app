import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./create.css";

const Create = () => {
  const [lists, setLists] = useState([]);

  function addList(newList) {
    setLists(prevLists => {
      return [...prevLists, newList];
    });
  }

  const deleteList = (id) => {
    setLists(prevLists => {
      return prevLists.filter((listItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
   
      <CreateArea onAdd={addList} />
      {lists.map((listItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={listItem.title}
            content={listItem.content}
            onDelete={deleteList}
          />
        );
      })}
    
    </div>
  );
}

export default Create;
