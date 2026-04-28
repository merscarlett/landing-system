import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import data from "../data/reviews.json";
import ReviewItem from "../../../core/components/ReviewItem";
import { useScrollReveal } from "../../../core/hooks/useScrollReveal";
import reviewAvatar from "../images/reviewAvatar.jpg";

function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollReveal(0.3);

  const reviews = data.map((item) => ({
    ...item,
    avatar: reviewAvatar,
  }));

  const smoothScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.5;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-700 pt-10 pb-20 text-gray-100"
    >
      <h2 className="mb-16 text-center font-serif text-3xl font-bold text-yellow-400 sm:text-4xl lg:text-5xl">
        Відгуки наших учасників
      </h2>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <button
          type="button"
          onClick={() => smoothScroll("left")}
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-yellow-400/80 p-3 text-gray-900 shadow-lg transition hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-200"
          aria-label="Показати попередні відгуки"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-6 [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {reviews.map((item, index) => (
            <div
              key={item.name}
              className={`fade-in-up ${isVisible ? "show" : ""} flex w-[80%] shrink-0 snap-center sm:w-[45%] lg:w-[30%]`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ReviewItem
                item={item}
                className="flex h-full flex-col justify-between rounded-2xl bg-yellow-50 p-8 text-left shadow-md transition-transform duration-500 ease-out hover:scale-[1.03] sm:p-10"
                imageWrapperClassName="flex items-center gap-4"
                avatarClassName="h-16 w-16 rounded-full object-cover border-2 border-yellow-400"
                nameClassName="text-lg font-semibold text-gray-900"
                roleClassName="text-sm text-gray-500"
                textClassName="mt-4 text-base leading-relaxed text-gray-700"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => smoothScroll("right")}
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-yellow-400/80 p-3 text-gray-900 shadow-lg transition hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-200"
          aria-label="Показати наступні відгуки"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

export default ReviewsSection;
