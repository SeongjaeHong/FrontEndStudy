import React from "react";
import Profile, { Avatar } from "./components/Profile";
import "./App.css";

export default function App() {
  return (
    <>
      <Profile
        image="https://plus.unsplash.com/premium_photo-1717529136642-269beec93a32?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="James Kim"
        title="Frontend Developer"
        isnew={true}
      />
      <Profile
        image="https://plus.unsplash.com/premium_photo-1717529136642-269beec93a32?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Make Tim"
        title="Frontend Developer2"
      />
      <Avatar
        image="https://plus.unsplash.com/premium_photo-1717529136642-269beec93a32?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Make Tim"
        title="Frontend Developer2"
        isnew={true}
      />
    </>
  );
}
