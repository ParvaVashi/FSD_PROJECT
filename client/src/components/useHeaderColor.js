import { useEffect, useState } from "react";

const useBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("none");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 8) {
        setBackgroundColor("#302e2e"); // Dark background when scrolled
      } else {
        setBackgroundColor("none"); // No background when at the top
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return backgroundColor;
};

export default useBackgroundColor;
