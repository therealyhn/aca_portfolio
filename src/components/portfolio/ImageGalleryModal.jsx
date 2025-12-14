import { useEffect } from "react";

export default function ImageGalleryModal({ items, activeIndex, onClose, onPrev, onNext }) {
  const shouldShow = items && items.length > 0 && activeIndex != null;

  useEffect(() => {
    if (!shouldShow) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [shouldShow, onClose, onPrev, onNext]);

  if (!shouldShow) return null;

  const current = items[activeIndex];

  const iconStyle = {
    color: "#fff",
    textShadow: "0 2px 2px rgba(0,0,0,0.65), 0 1px 1px rgba(0,0,0,0.60)",
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-dark/60 backdrop-blur-sm p-2 sm:p-4"
      onClick={onClose}
      style={{
        // bolji mobile viewport (iOS/Chrome)
        paddingTop: "max(0.5rem, env(safe-area-inset-top))",
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))",
      }}
    >
      {/* Kontejner prati sliku, ali controls su overlay (ne jedu visinu) */}
      <div
        className="relative bg-black/90 shadow-2xl rounded-xl overflow-hidden"
        style={{
          maxWidth: "95vw",
          // dvh rešava “skakanje” na mobile (adres bar)
          maxHeight: "92dvh",
          boxShadow: "0 0 0 2px rgba(255,255,255,0.11), 0 0 16px 0px rgba(255,255,255,0.16)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        <div className="relative flex items-center justify-center">
          <img
            src={current.image}
            alt={current.alt || current.title}
            loading="lazy"
            className="select-none object-contain block"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "95vw",
              // bitno: slika se nikad ne seče, samo se uklapa u viewport
              maxHeight: "92dvh",
            }}
          />

          {/* Gradijent dole (za tekst i kontrole) */}
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-2 top-2 sm:right-3 sm:top-3 z-30 w-10 h-10 flex items-center justify-center text-3xl text-white hover:text-primary hover:scale-125 transition active:scale-95 duration-300"
            aria-label="Zatvori"
            style={{ top: "max(0.5rem, env(safe-area-inset-top))" }}
          >
            <span style={iconStyle}>x</span>
          </button>

          {/* Desktop arrows (van slike vizuelno, ali overlay) */}
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="hidden md:flex absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 items-center justify-center text-white text-4xl md:text-6xl transition active:scale-95 duration-300"
                aria-label="Prethodna slika"
              >
                <span style={iconStyle}>‹</span>
              </button>
              <button
                type="button"
                onClick={onNext}
                className="hidden md:flex absolute right-2 md:-right-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 items-center justify-center text-white text-4xl md:text-6xl transition active:scale-95 duration-300"
                aria-label="Sledeća slika"
              >
                <span style={iconStyle}>›</span>
              </button>
            </>
          )}

          {/* Mobile arrows (OVERLAY, ne dodaju visinu) */}
          {items.length > 1 && (
            <div
              className="md:hidden absolute left-0 right-0 bottom-12 z-30 flex items-center justify-center gap-10"
              style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
              <button
                type="button"
                onClick={onPrev}
                className="w-11 h-11 flex items-center justify-center bg-black/70 text-white text-2xl shadow-md transition active:scale-95 rounded-full border border-white/15"
                aria-label="Prethodna slika"
              >
                <span style={iconStyle}>‹</span>
              </button>
              <button
                type="button"
                onClick={onNext}
                className="w-11 h-11 flex items-center justify-center bg-black/70 text-white text-2xl shadow-md transition active:scale-95 rounded-full border border-white/15"
                aria-label="Sledeća slika"
              >
                <span style={iconStyle}>›</span>
              </button>
            </div>
          )}

          {/* Title + counter (OVERLAY) */}
          <div className="absolute bottom-2 left-0 right-0 z-30 px-3 text-center">
            <h4 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold truncate max-w-[95%] mx-auto drop-shadow">
              {current.title}
            </h4>
            <p className="text-white/75 text-[11px] sm:text-xs md:text-sm mt-1 drop-shadow">
              {activeIndex + 1} / {items.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
