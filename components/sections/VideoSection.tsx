import VideoEmbed from "@/components/VideoEmbed";
import { site } from "@/lib/site";

export default function VideoSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-[2.25rem]">
          צפו: כולנו עושים את זה — אבל האם נכון?
        </h2>
        <p className="mt-3 text-ink-soft">
          ההסבר המלא מפי ד&quot;ר סיקירוב, בגובה העיניים.
        </p>
        <div className="mt-8">
          <VideoEmbed
            videoId={site.youtubeVideoId}
            title="כולנו עושים את זה — אבל האם אנחנו עושים את זה נכון?"
          />
        </div>
      </div>
    </section>
  );
}
