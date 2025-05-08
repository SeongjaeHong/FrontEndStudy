import { Outlet } from "react-router";

export default function Page1() {
  return (
    <>
      <p
        style={{
          backgroundColor: "powderblue",
          Color: "yellow",
          borderRadius: "30%",
        }}
      >
        prefix 2
      </p>
      <Outlet />
    </>
  );
}
