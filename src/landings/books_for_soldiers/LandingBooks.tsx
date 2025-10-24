import ScrollToTopButton from "../../core/components/ScrollToTopButton";
import AdvantagesSection from "./sections/AdvantagesSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import ReviewsSection from "./sections/ReviewsSection";

export default function LandingBooks() {
  return (
    <>
      <main>
        <HeroSection />
        <AdvantagesSection />
        <ReviewsSection />
        <FooterSection />
      </main>

      <ScrollToTopButton
        buttonClassName="bottom-6 right-6 z-50 rounded-full bg-yellow-400 p-3 shadow-lg hover:scale-110 hover:bg-yellow-500"
        iconClassName="h-6 w-6 text-gray-900"
      />
    </>
  );
}
