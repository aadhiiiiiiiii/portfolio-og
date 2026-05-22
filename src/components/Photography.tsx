import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import capture1 from "@/assets/photography/capture1.jpg";
import capture2 from "@/assets/photography/capture2.jpg";
import capture3 from "@/assets/photography/capture3.jpg";
import capture4 from "@/assets/photography/capture4.jpg";
import capture5 from "@/assets/photography/capture5.jpg";
import capture6 from "@/assets/photography/capture6.jpg";
import capture7 from "@/assets/photography/capture7.jpg";
import capture8 from "@/assets/photography/capture8.jpg";
import capture9 from "@/assets/photography/capture9.jpg";
import capture10 from "@/assets/photography/capture10.jpg";
import capture11 from "@/assets/photography/capture11.jpg";
import capture12 from "@/assets/photography/capture12.jpg";


// ---------- Photo data ----------
// To add/remove photos: import a new image above and add/remove an entry below.
// `span` controls bento sizing on md+ screens (col/row spans).
type Photo = {
  src: string;
  alt: string;
  span?: string;
};

const photos: Photo[] = [
  { src: capture1, alt: "Capture 1", span: "md:col-span-2 md:row-span-2" },
  { src: capture2, alt: "Capture 2", span: "md:col-span-2" },
  { src: capture3, alt: "Capture 3" },
  { src: capture4, alt: "Capture 4" },
  { src: capture5, alt: "Capture 5", span: "md:col-span-2" },
  { src: capture6, alt: "Capture 6", span: "md:col-span-2" },
  { src: capture7, alt: "Capture 7", span: "md:col-span-2" },
  { src: capture8, alt: "Capture 8", span: "md:col-span-2" },
  { src: capture9, alt: "Capture 9", span: "md:col-span-2" },
  { src: capture10, alt: "Capture 10", span: "md:col-span-2" },
  { src: capture11, alt: "Capture 11", span: "md:col-span-2" },
  { src: capture12, alt: "Capture 12", span: "md:col-span-2" },
];

// ---------- Section header (matches Portfolio.tsx style) ----------
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function Lightbox({
  photo,
  onClose,
  onPrev,
  onNext,
}: {
  photo: Photo;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-4 backdrop-blur-xl md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="glass-strong absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full text-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_30px_-5px_var(--primary)]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo"
        className="glass-strong absolute left-4 top-1/2 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full text-foreground transition-all hover:border-primary/50 hover:text-primary md:grid"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo"
        className="glass-strong absolute right-4 top-1/2 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full text-foreground transition-all hover:border-primary/50 hover:text-primary md:grid"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <motion.img
        key={photo.src}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        src={photo.src}
        alt={photo.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_30px_120px_-20px_rgba(0,0,0,0.8)] glow-ring"
      />
    </motion.div>
  );
}

export function Photography() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    []
  );

  return (
    <section id="photography" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-14 max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary"
          >
            <span className="h-px w-8 bg-primary" /> Photography
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-semibold tracking-tight md:text-5xl">
            Photography
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
            A collection of my cinematic captures and visual storytelling.
          </motion.p>
        </motion.div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
          {photos.map((photo, i) => (
            <motion.button
              type="button"
              key={photo.src + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveIndex(i)}
              aria-label={`Open ${photo.alt}`}
              className={`glass group relative overflow-hidden rounded-2xl p-0 text-left transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-5px_var(--primary)] ${photo.span ?? ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-primary/40" />
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="glass rounded-full px-2.5 py-1 text-primary">View</span>
                <span className="text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            photo={photos[activeIndex]}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
