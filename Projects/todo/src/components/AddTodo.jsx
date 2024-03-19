import React, { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target["item_text"].value);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="item_text"
        value={text}
        onChange={handleChange}
        placeholder="Add Todo"
      />
      <input
        type="submit"
        value="Add"
      />
    </form>
  );
}
