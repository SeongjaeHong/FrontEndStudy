import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <div>
      <Link to="/">
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          name="search_query"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
