import { useState, type KeyboardEvent } from "react";

interface FlipImageProps {
  frontSrc: string;
  backSrc: string;
  frontAlt?: string;
  backAlt?: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  overlayClassName?: string;
  duration?: number;
}

/**
 * Reusable 3D flip image. Click/tap (or Enter/Space) to flip on the Y-axis.
 * Front/back share the same box, so layout never shifts.
 */
export function FlipImage({
  frontSrc,
  backSrc,
  frontAlt = "",
  backAlt = "",
  width,
  height,
  className = "",
  imgClassName = "h-full w-full object-cover",
  overlayClassName,
  duration = 850,
}: FlipImageProps) {
  const [flipped, setFlipped] = useState(false);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label="Flip portrait"
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={onKey}
      className={`relative h-full w-full ${className}`}
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-full w-full"
        style={{
          transformStyle: "preserve-3d",
          transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          willChange: "transform",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-[inherit]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <img
            src={frontSrc}
            alt={frontAlt}
            width={width}
            height={height}
            className={imgClassName}
            draggable={false}
          />
          {overlayClassName ? <div className={overlayClassName} /> : null}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-[inherit]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={backSrc}
            alt={backAlt}
            width={width}
            height={height}
            className={imgClassName}
            draggable={false}
          />
          {overlayClassName ? <div className={overlayClassName} /> : null}
        </div>
      </div>
    </div>
  );
}
