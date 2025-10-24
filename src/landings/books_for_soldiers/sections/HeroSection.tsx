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
        <nav className="flex justify-center gap-8 py-4 text-sm font-semibold drop-shadow-md sm:text-base md:text-xl lg:text-2xl">
          <Navigation
            items={navigationItems}
            className="flex justify-center gap-8 py-4 text-sm font-semibold drop-shadow-md sm:text-base md:text-xl lg:text-2xl"
            linkClassName="border-b-2 border-transparent pb-1 font-sans text-yellow-50 transition-colors hover:border-yellow-400 hover:text-yellow-400"
          />
        </nav>

        <div className="flex min-h-[75vh] flex-col items-center justify-center px-4 text-center text-yellow-50 drop-shadow-lg">
          <Hero
            title="Подаруй книжку нашим захисникам"
            subtitle="Кожна історія — це підтримка, тепло та спогади про дім."
            ctaText="Пожертвувати книгу"
            onCtaClick={() => {
              if (typeof window.fbq === "function") {
                window.fbq("track", "Lead");
              }
            }}
            titleClassName="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4"
            subtitleClassName="text-lg sm:text-xl mb-6 font-sans"
            buttonClassName="rounded-lg bg-yellow-400 text-black hover:bg-yellow-500 hover:scale-105 px-6 py-3 sm:px-8 md:py-4 md:text-lg font-sans font-semibold transition-transform"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
