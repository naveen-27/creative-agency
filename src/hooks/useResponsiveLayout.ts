import { useState, useEffect } from "react";

function getDevice(width: number): string {
  return width > 900
    ? "desktop"
    : width > 750 && width <= 900
    ? "tablet"
    : "mobile";
}

const useResponsiveLayout: () => string = () => {
  const [device, setDevice] = useState(getDevice(window.innerWidth));

  useEffect(function attachResizeListener() {
    window.onresize = () => {
      const width = window.innerWidth;
      if (device !== getDevice(width)) {
        setDevice(getDevice(width));
      }
    };
  });

  return device;
};

export default useResponsiveLayout;
