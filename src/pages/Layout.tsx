import NavBar from "@/components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/react";
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
      <SpeedInsights />
    </>
  );
};

export default Layout;
