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
    const iconStyle = {
        color: "#fff",
        textShadow:
            "0 2px 2px rgba(0,0,0,0.65), 0 1px 1px rgba(0,0,0,0.60)",
    };

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-dark/60 backdrop-blur-sm p-2 sm:p-4"
            onClick={onClose}
        >
            {/* OVAJ kontejner sada prati veličinu slike (max 95vw / 90vh) */}
            <div
                className="relative inline-flex items-center justify-center rounded-xl overflow-hidden bg-black/90 shadow-2xl"
                style={{
                    maxWidth: "95vw",
                    maxHeight: "90vh",
                    boxShadow:
                        "0 0 0 2px rgba(255,255,255,0.11), 0 0 16px 0px rgba(255,255,255, 0.16)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Sadržaj */}
                <div className="relative flex items-center justify-center">
                    <img
                        src={current.image}
                        alt={current.title}
                        loading="lazy"
                        className="select-none object-contain"
                        style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "95vw",
                            maxHeight: "85vh", 
                        }}
                    />

                    {/* Donji gradient da se lepo vidi tekst / brojač */}
                    <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                    {/* Close dugme */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-2 top-2 sm:right-3 sm:top-3 z-30 w-10 h-10 flex items-center justify-center text-3xl text-white hover:text-primary hover:scale-125 transition active:scale-95 duration-300"
                        aria-label="Zatvori"
                    >
                        <span style={iconStyle}>x</span>
                    </button>

                    {/* Desktop strelice – levo/desno od slike */}
                    {items.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={onPrev}
                                className="hidden md:flex absolute left-1 md:-left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 items-center justify-center text-white text-3xl md:text-5xl transition active:scale-95 duration-300"
                                aria-label="Prethodna slika"
                            >
                                <span style={iconStyle}>‹</span>
                            </button>
                            <button
                                type="button"
                                onClick={onNext}
                                className="hidden md:flex absolute right-1 md:-right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 items-center justify-center text-white text-3xl md:text-5xl transition active:scale-95 duration-300"
                                aria-label="Sledeća slika"
                            >
                                <span style={iconStyle}>›</span>
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

                {/* Mobile strelice ispod slike */}
                {items.length > 1 && (
                    <div className="md:hidden flex items-center justify-center gap-10 py-3 bg-black/90 w-full">
                        <button
                            type="button"
                            onClick={onPrev}
                            className="w-10 h-10 flex items-center justify-center bg-black/90 text-white text-2xl shadow-md transition active:scale-95"
                            aria-label="Prethodna slika"
                        >
                            <span style={iconStyle}>‹</span>
                        </button>
                        <button
                            type="button"
                            onClick={onNext}
                            className="w-10 h-10 flex items-center justify-center bg-black/90 text-white text-2xl shadow-md transition active:scale-95"
                            aria-label="Sledeća slika"
                        >
                            <span style={iconStyle}>›</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
