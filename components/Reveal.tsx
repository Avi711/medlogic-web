/**
 * Fade-and-rise entrance driven by CSS scroll-timeline (see globals.css).
 * No JavaScript: browsers without support — and users preferring reduced
 * motion — simply see the content immediately.
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
