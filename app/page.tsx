import Header from "@/components/Header";
import StickyMobileBar from "@/components/StickyMobileBar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import DoctorStory from "@/components/sections/DoctorStory";
import VideoSection from "@/components/sections/VideoSection";
import Benefits from "@/components/sections/Benefits";
import PressStrip from "@/components/sections/PressStrip";
import Testimonials from "@/components/sections/Testimonials";
import MidCta from "@/components/sections/MidCta";
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
        <HowItWorks />
        <DoctorStory />
        <VideoSection />
        <Benefits />
        <PressStrip />
        <Testimonials />
        <MidCta />
        <ResearchWall />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
