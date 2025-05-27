"use client";

import { useEffect } from "react";

const DynamicSpacing = () => {
  useEffect(() => {
    function setHeaderHeight() {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
    }

    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);
    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  return null;
};

export default DynamicSpacing;
