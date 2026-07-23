/**
 * Renders the minimal markdown used by the paper files:
 * #..###### headings and plain paragraphs. No inline syntax is used there.
 */
export default function PaperBody({
  markdown,
  dir,
}: {
  markdown: string;
  dir: "rtl" | "ltr";
}) {
  const allBlocks = markdown
    .split(/\r?\n\r?\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  // Each file opens with the title, subtitle and byline as headings. The page
  // header already presents them, so skip that opening run of headings.
  const firstProse = allBlocks.findIndex((b) => !b.startsWith("#"));
  const blocks = firstProse > 0 ? allBlocks.slice(firstProse) : allBlocks;

  return (
    <div dir={dir} className="space-y-5">
      {blocks.map((block, i) => {
        const heading = block.match(/^(#{1,6})\s+([\s\S]*)$/);
        if (heading) {
          const text = heading[2].replace(/\r?\n/g, " ");
          return heading[1].length <= 2 ? (
            <h2 key={i} className="pt-4 font-display text-2xl font-bold text-pine">
              {text}
            </h2>
          ) : (
            <h3 key={i} className="pt-2 font-display text-xl font-bold text-ink">
              {text}
            </h3>
          );
        }
        return (
          <p key={i} className="text-ink-soft">
            {block.replace(/\r?\n/g, " ")}
          </p>
        );
      })}
    </div>
  );
}
