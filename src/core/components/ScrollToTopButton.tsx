import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

interface ScrollToTopButtonProps {
  buttonClassName?: string;
  iconClassName?: string;
  showAfter?: number;
}

export default function ScrollToTopButton({
  buttonClassName = "",
  iconClassName = "",
  showAfter = 400,
}: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > showAfter);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed transition-all duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      } ${buttonClassName}`}
      aria-label="Go back up"
    >
      <ArrowUp className={iconClassName} />
    </button>
  );
}
