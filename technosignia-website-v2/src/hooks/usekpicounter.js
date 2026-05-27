import { useState, useEffect, useRef } from "react";
import { KPI_TARGETS } from "../constants/data";

export function useKpiCounters() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const kpiRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          KPI_TARGETS.forEach((target, i) => {
            const duration = 1800;
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters((prev) => {
                const next = [...prev];
                next[i] = Math.floor(current);
                return next;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (kpiRef.current) observer.observe(kpiRef.current);
    return () => observer.disconnect();
  }, []);

  return { counters, kpiRef };
}
