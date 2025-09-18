"use client";
import { useEffect, useState } from "react";

export const useTime = () => {
  const [clock, setClock] = useState<string>("");
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        timeZone: "Europe/Amsterdam",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      });
      setClock(time);
    };

    updateClock();
    setYear(new Date().getFullYear());
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return { clock, year };
};
