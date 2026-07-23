import VideoEmbed from "@/components/VideoEmbed";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

/** One of two dark punctuations on the page: the screening. */
export default function VideoSection() {
  return (
    <section className="bg-night py-14 sm:py-20">
      <div className="shell grid items-start gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <div>
          <SectionHeading
            eyebrow="וידאו"
            title="צפו: כולנו עושים את זה — אבל האם נכון?"
            dark
          />
          <p className="mt-5 text-[1.0625rem] text-night-ink-soft">
            ההסבר המלא מפי ד&quot;ר סיקירוב, בגובה העיניים.
          </p>
        </div>

        <div>
          <VideoEmbed
            videoId={site.youtubeVideoId}
            title="כולנו עושים את זה — אבל האם אנחנו עושים את זה נכון?"
          />
          <p className="caption mt-2.5 border-t border-night-ink/25 pt-2 text-night-ink-soft">
            הסרטון נטען מ־<span className="ltr-isolate">YouTube</span> רק אחרי
            שתלחצו על ההפעלה.
          </p>
        </div>
      </div>
    </section>
  );
}
