import { useEffect } from "react";

export default function ImageGalleryModal({
    items,
    activeIndex,
    onClose,
    onPrev,
    onNext,
}) {
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

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-dark/60 backdrop-blur-sm p-0 sm:p-4"
            onClick={onClose}
        >
            {/* Responsive wrapper for mobile modal */}
            <div
                className="relative w-full h-full sm:inline-flex sm:h-auto sm:w-auto items-center justify-center rounded-none sm:rounded-xl overflow-hidden shadow-2xl bg-black/90"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Responsive content area */}
                <div className="relative flex items-center justify-center w-full h-full sm:w-auto sm:h-auto">
                    <img
                        src={current.image}
                        alt={current.title}
                        loading="lazy"
                        className="w-full h-full sm:w-auto sm:h-auto max-w-full max-h-full sm:max-w-[95vw] sm:max-h-[85vh] object-contain select-none"
                        style={{
                            // On small screens, ensure image does not overflow, but fills nicely
                            objectFit: "contain"
                        }}
                    />

                    {/* Gradients for visibility of controls and text */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-9 sm:w-[50px] bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-9 sm:w-[50px] bg-gradient-to-l from-black/30 via-black/10 to-transparent" />
                    <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

                    {/* Close button: top right on all sizes, but with more spacing on small */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-2 top-2 sm:right-3 sm:top-3 z-30 w-10 h-10 flex items-center justify-center text-3xl text-white hover:text-primary 
                        hover:scale-125 transition active:scale-95 duration-300 bg-black/60 rounded-full sm:bg-transparent"
                        aria-label="Zatvori"
                    >
                        ×
                    </button>

                    {/* Desktop arrows – sa strane slike */}
                    {items.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={onPrev}
                                className="hidden md:flex absolute left-1 md:left-0 top-[45%] -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 items-center 
                                justify-center text-white text-3xl md:text-6xl transition active:scale-95 duration-300"
                                aria-label="Prethodna slika"
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                onClick={onNext}
                                className="hidden md:flex absolute right-1 md:right-0 top-[45%] -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 items-center 
                                justify-center text-white text-3xl md:text-6xl transition active:scale-95 duration-300"
                                aria-label="Sledeća slika"
                            >
                                ›
                            </button>
                        </>
                    )}

                    {/* Title + counter */}
                    <div className="absolute bottom-2 left-0 right-0 z-30 px-2 sm:px-4 text-center">
                        <h4 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold truncate max-w-[95%] mx-auto drop-shadow">
                            {current.title}
                        </h4>
                        <p className="text-white/75 text-[11px] sm:text-xs md:text-sm mt-1 drop-shadow">
                            {activeIndex + 1} / {items.length}
                        </p>
                    </div>
                </div>

                {/* Mobile arrows */}
                {items.length > 1 && (
                    <div className="md:hidden flex items-center justify-center gap-10 py-3 bg-black/90 w-full absolute left-0 right-0" style={{ bottom: '4.5rem' }}>
                        <button
                            type="button"
                            onClick={onPrev}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/90 hover:bg-primary/80 text-white text-2xl shadow-md transition active:scale-95"
                            aria-label="Prethodna slika"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={onNext}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/90 hover:bg-primary/80 text-white text-2xl shadow-md transition active:scale-95"
                            aria-label="Sledeća slika"
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
