import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <p style={{ Width: "500px", backgroundColor: "gray", Color: "red" }}>
        This is Layout wrap-start
      </p>
      <Outlet />
      <p style={{ Width: "500px", backgroundColor: "gray", Color: "red" }}>
        This is Layout wrap-end
      </p>
    </>
  );
}
