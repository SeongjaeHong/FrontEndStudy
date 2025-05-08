import React from "react";
import "./css/header.css";
import { FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
// import VideoList from "./video-list";
import { Form, Outlet } from "react-router";

export default function SearchHeader() {
  //   const searchHandler = async (e) => {
  //     const searchResult = fetch(
  //       process.env.PUBLIC_URL + "/videos/videos.json"
  //     ).then((res) => res.json());
  //     return <VideoList videoList={searchResult} />; // TODO: 어떻게 URL 이동하지? return할게 아니라 URL 이동해야 함
  //   };
  return (
    <section className='main-root'>
      <section className='main-frame'>
        <header>
          <div className='logo'>
            <span
              id='icon'
              className='text-red-600'
            >
              <FaYoutube />
            </span>
            <span id='letter'>Youtube</span>
          </div>
          <Form
            className='search'
            method='post'
            navigate={false}
            action='/results'
          >
            <input
              className='search-tab'
              id='search-tab'
              placeholder='검색'
            ></input>
            <button id='search-button'>
              <IoSearch />
            </button>
          </Form>
        </header>
        <Outlet />
      </section>
    </section>
  );
}
export async function action({ request }) {
  const data = await request.formData();
  console.log("Show something");
  console.log(data);
}
