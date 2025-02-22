import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const ScrollToTop = ({ children }: Props) => {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
      console.log("scroll to top");
    }
  }, [location]);
  return <>{children}</>;
};

export default ScrollToTop;
