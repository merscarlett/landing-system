import { HandHeart, Send, BookOpen, Users, ShieldCheck, HeartHandshake } from "lucide-react";

import data from "../data/advantages.json";
import AdvantageItem from "../../../core/components/AdvantageItem";
import { useScrollReveal } from "../../../core/hooks/useScrollReveal";

const icons = {
  HandHeart: <HandHeart />,
  Send: <Send />,
  BookOpen: <BookOpen />,
  Users: <Users />,
  ShieldCheck: <ShieldCheck />,
  HeartHandshake: <HeartHandshake />,
} as const;

function AdvantagesSection() {
  const { ref, isVisible } = useScrollReveal(0.3);

  const advantages = data.map((item) => ({
    ...item,
    icon: icons[item.icon as keyof typeof icons],
  }));

  return (
    <section
      id="advantages"
      className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 pt-20 pb-10 text-gray-800"
    >
      <div
        ref={ref}
        className={`fade-in-up ${isVisible ? "show" : ""} container mx-auto px-6 sm:px-8`}
      >
        <h2 className="mb-16 text-center font-serif text-3xl font-bold text-yellow-400 sm:text-4xl lg:text-5xl">
          Наші переваги
        </h2>

        <div className="mx-auto grid max-w-7xl [grid-auto-rows:1fr] gap-8 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <div
              key={item.title}
              className={`fade-in-up ${isVisible ? "show" : ""} flex`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <AdvantageItem
                item={item}
                className="flex h-full flex-1 flex-col items-center justify-start rounded-2xl bg-yellow-50 p-8 text-center shadow-md hover:-translate-y-2 sm:p-10"
                iconWrapperClassName="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-yellow-700"
                titleClassName="mb-3 font-sans text-xl font-semibold sm:text-2xl"
                descriptionClassName="font-sans text-base leading-relaxed text-gray-600 sm:text-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection;
