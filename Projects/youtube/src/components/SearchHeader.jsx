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

  const btn_remove_text = document.getElementById("remove_text");

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  useEffect(() => {
    if (btn_remove_text) {
      if (text) {
        btn_remove_text.classList.remove("opacity-0");
      } else {
        btn_remove_text.classList.add("opacity-0");
      }
    }
  }, [text, btn_remove_text]);

  return (
    <div className="flex justify-center items-center py-4">
      <Link
        to="/"
        className="flex absolute left-0 mx-4 text-4xl">
        <BsYoutube className="text-youtube-red" />
        <h1 className="text-white pl-1 text-3xl">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="relative flex item-center text-md text-zinc-700">
        <input
          className="bg-black text-gray-300 w-72 pl-5 py-1 h-10 rounded-l-full border border-zinc-700"
          type="text"
          placeholder="Search"
          name="search_query"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="button"
          id="remove_text"
          className="text-center pt-1 text-4xl absolute right-14 -translate-y-1 w-12 h-12 rounded-full opacity-0 text-white"
          onMouseEnter={(e) => {
            e.target.classList.add("bg-opacity-30");
            e.target.classList.add("bg-gray-200");
          }}
          onMouseLeave={(e) => {
            e.target.classList.remove("bg-opacity-30");
            e.target.classList.remove("bg-gray-200");
          }}
          onClick={() => setText("")}>
          X
        </button>
        <button
          type="submit"
          className="bg-zinc-700 px-5 h-10 text-xl rounded-r-full text-white">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
