import NavBar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollToTop>
        <NavBar />
        <Outlet />
      </ScrollToTop>
    </>
  );
};

export default Layout;
