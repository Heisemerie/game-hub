import NavBar from "@/components/NavBar";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
      console.log("scroll to top");
    }
  }, [location]);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
