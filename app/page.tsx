import Header from "@/components/Header";
import StickyMobileBar from "@/components/StickyMobileBar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Evidence from "@/components/sections/Evidence";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import VideoSection from "@/components/sections/VideoSection";
import DoctorStory from "@/components/sections/DoctorStory";
import MidCta from "@/components/sections/MidCta";
import Testimonials from "@/components/sections/Testimonials";
import PressStrip from "@/components/sections/PressStrip";
import ResearchWall from "@/components/sections/ResearchWall";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Problem />
        <Evidence />
        <HowItWorks />
        <Benefits />
        <VideoSection />
        <DoctorStory />
        <MidCta />
        <Testimonials />
        <PressStrip />
        <ResearchWall />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
