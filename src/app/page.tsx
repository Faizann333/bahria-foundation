import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ProgramsCarousel } from "@/components/sections/ProgramsCarousel";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AdmissionsTimeline } from "@/components/sections/AdmissionsTimeline";
import { CampusLife } from "@/components/sections/CampusLife";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <AboutPreview />
      <ProgramsCarousel />
      <WhyChooseUs />
      <AdmissionsTimeline />
      <CampusLife />
      <Testimonials />
      <Stats />
    </div>
  );
}
