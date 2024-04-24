import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper flex">
          <Sidebar />
          <Outlet/>
        </div>
      </main>
    </>
  );
};

export default Layout;
