import VideoEmbed from "@/components/VideoEmbed";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export default function VideoSection() {
  return (
    <section id="video" className="shell scroll-mt-28 pb-16 sm:pb-24">
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-center">
        <SectionHeading
          eyebrow="וידאו"
          title="כולנו עושים את זה — אבל האם נכון?"
          lede="ההסבר המלא מפי ד״ר סיקירוב, בגובה העיניים. הסרטון נטען מ־YouTube רק אחרי שתלחצו על ההפעלה."
        />

        <VideoEmbed
          videoId={site.youtubeVideoId}
          title="כולנו עושים את זה — אבל האם אנחנו עושים את זה נכון?"
        />
      </div>
    </section>
  );
}
