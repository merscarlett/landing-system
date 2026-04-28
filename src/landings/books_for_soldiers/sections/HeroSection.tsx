import Hero from "../../../core/components/Hero";
import Navigation from "../../../core/components/Navigation";
import { useScrollReveal } from "../../../core/hooks/useScrollReveal";
import heroBg from "../images/hero-bg.jpg";
import navigationItems from "../data/navigation.json";

declare global {
  interface Window {
    fbq?: (
      command: "init" | "track" | string,
      eventName?: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.3);

  const handleCtaClick = () => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }

    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center py-20 text-gray-200 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:via-black/70 before:to-zinc-900"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div
        ref={ref}
        className={`fade-in-up relative z-10 flex flex-col items-center ${isVisible ? "show" : ""}`}
      >
        <Navigation
          items={navigationItems}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 px-4 py-4 text-sm font-semibold drop-shadow-md sm:text-base md:text-xl lg:text-2xl"
          linkClassName="border-b-2 border-transparent pb-1 font-sans text-yellow-50 transition-colors hover:border-yellow-400 hover:text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
        />

        <div className="flex min-h-[75vh] flex-col items-center justify-center px-4 text-center text-yellow-50 drop-shadow-lg">
          <Hero
            title="Подаруй книжку нашим захисникам"
            subtitle="Кожна історія — це підтримка, тепло та спогади про дім."
            ctaText="Пожертвувати книгу"
            onCtaClick={handleCtaClick}
            titleClassName="mb-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            subtitleClassName="mb-6 font-sans text-lg sm:text-xl"
            buttonClassName="rounded-lg bg-yellow-400 px-6 py-3 font-sans font-semibold text-black transition-transform hover:scale-105 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-100 sm:px-8 md:py-4 md:text-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
