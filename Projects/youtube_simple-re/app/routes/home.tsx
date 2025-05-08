import { Outlet } from "react-router";
import { Welcome } from "../welcome/welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <Outlet />
    </>
  );
}
