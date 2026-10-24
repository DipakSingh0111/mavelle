import AboutMaville from "@/components/common/AboutMaville";
import Hero from "@/components/common/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import MenuSection from "@/components/MenuSection";
import ReservationBanner from "@/components/ReservationBanner";
import OurChefs from "@/components/common/OurChefs";
import OurGallery from "@/components/common/OurGallery";
import OurTestimonials from "@/components/common/OurTestimonials";
import OurBlogs from "@/components/common/OurBlogs";
import { sectionsData } from "@/types/mavelle.types";

export default function Home() {
  const sectionData = sectionsData;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <div className="w-full bg-white">
      <Hero data={sectionData.HeroBanner?.variants?.MavelleHeroBanner1} />
      <FeaturesBar data={sectionData.Features?.variants?.MavelleFeatures1} />
      <MenuSection data={sectionData.Menu?.variants?.MavelleMenu1} />
      <AboutMaville data={sectionData.AboutUs?.variants?.MavelleAboutUs1} />
      <ReservationBanner data={sectionData.ReservationBanner?.variants?.MavelleReservationBanner1} />
      <OurChefs data={sectionData.Chefs?.variants?.MavelleChefs1} />
      <OurGallery data={sectionData.Gallery?.variants?.MavelleGallery1} />
      <OurTestimonials data={sectionData.Testimonials?.variants?.MavelleTestimonials1} />
      <OurBlogs data={sectionData.BlogNews?.variants?.MavelleBlogNews1} />
    </div>
  );
}
