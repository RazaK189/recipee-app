import React, { useState } from "react";
import "./create.css";

const CreateArea = (props) => {
  const [list, setList] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setList((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  const submitList = (event) => {
    props.onAdd(list);
    setList({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={list.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={list.content}
          placeholder="Ingreidents I need..."
          rows="3"
        />
        <button onClick={submitList}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
