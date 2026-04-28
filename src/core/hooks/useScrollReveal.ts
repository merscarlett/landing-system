import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold,
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
