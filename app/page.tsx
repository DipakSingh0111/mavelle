import AboutMaville from "./components/common/AboutMaville";
import Hero from "./components/common/Hero";
import FeaturesBar from "./components/FeaturesBar";
import MenuSection from "./components/MenuSection";
import ReservationBanner from "./components/ReservationBanner";
import OurChefs from "./components/common/OurChefs";
import OurGallery from "./components/common/OurGallery";
import OurTestimonials from "./components/common/OurTestimonials";
import OurBlogs from "./components/common/OurBlogs";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <FeaturesBar />
      <MenuSection />
      <AboutMaville />
      <ReservationBanner />
      <OurChefs />
      <OurGallery />
      <OurTestimonials />
      <OurBlogs />
    </div>
  );
}
