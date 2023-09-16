import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
