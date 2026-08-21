import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
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
import { homeGraph } from "@/lib/seo";

export default function Home() {
  return (
    <>
      {/* Organization, founder, product, video, FAQ and the six papers — one linked graph. */}
      <JsonLd data={homeGraph()} />
      <Header heroId="hero" />
      <main id="main">
        {/*
          Hero is deliberately NOT wrapped — it is above the fold, so a scroll-
          driven entrance would either fire instantly or, worse, hold the
          headline invisible. Everything below it rises in as it arrives.
        */}
        <Hero />
        <Reveal>
          <TrustBar />
        </Reveal>
        {/*
          Press sits this high on purpose. The first question a sceptical reader
          has is "is this real?", not "how does it work?" — four named Israeli
          outlets answer that faster than any argument the page can make, and
          their headlines double as an explanation of the idea.
        */}
        <Reveal>
          <PressStrip />
        </Reveal>
        <Reveal>
          <Problem />
        </Reveal>
        <Reveal>
          <Evidence />
        </Reveal>
        {/* Having read the claim and the numbers, hear it from the inventor. */}
        <Reveal>
          <VideoSection />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <Benefits />
        </Reveal>
        <Reveal>
          <DoctorStory />
        </Reveal>
        <Reveal>
          <MidCta />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <ResearchWall />
        </Reveal>
        {/*
          Faq is NOT wrapped: it contains a `lg:sticky` sidebar (Faq.tsx:70), and
          the wrapper's transform would become its containing block and break the
          stick. Not worth a fade.
        */}
        <Faq />
        <Reveal>
          <FinalCta />
        </Reveal>
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
