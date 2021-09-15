import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type="text" value={content} onChange={handleChange} />
      </form>
    </div>
  );
}

export default AddTodo;
