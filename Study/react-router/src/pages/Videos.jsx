import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.currentTarget.value);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/videos/${text}`);
  };
  return (
    <div>
      videos
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="video ID"
          value={text}
          onChange={handleChange}></input>
      </form>
    </div>
  );
}
