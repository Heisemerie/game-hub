import NavBar from "@/components/NavBar";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
