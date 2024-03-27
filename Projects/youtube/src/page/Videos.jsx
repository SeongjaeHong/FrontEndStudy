import React from "react";
import SearchHeader from "../components/SearchHeader";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  return (
    <>
      <SearchHeader />
      <section>Videos {keyword ? `🔍${keyword}` : "🔥"}</section>
    </>
  );
}
