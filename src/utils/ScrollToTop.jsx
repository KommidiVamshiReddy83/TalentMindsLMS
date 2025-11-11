// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Smooth scroll to top when pathname changes
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth"
//     });
//   }, [pathname]);

//   return null;
// }
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const savedY = sessionStorage.getItem(`scroll-${pathname}`);
    window.scrollTo({ top: savedY ? parseInt(savedY) : 0, behavior: "instant" });

    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}
