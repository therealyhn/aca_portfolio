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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl max-h-[90vh] bg-background rounded-lg overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-3 top-3 z-10 text-text-muted hover:text-primary transition-colors text-4xl"
                >
                    ×
                </button>

                {/* Image + desktop strelice */}
                <div className="flex-1 flex flex-col md:flex-row items-center gap-4 p-4 md:p-6">
                    {/* Prev – DESKTOP ONLY (sa strane) */}
                    {items.length > 1 && (
                        <button
                            type="button"
                            onClick={onPrev}
                            className="hidden md:inline-flex h-10 w-10 text-primary text-7xl items-center justify-center rounded-full"
                        >
                            ‹
                        </button>
                    )}

                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full max-h-[60vh] overflow-hidden rounded-md flex items-center justify-center">
                            <img
                                src={current.image}
                                alt={current.title}
                                className="max-h-[60vh] w-auto object-contain"
                            />
                        </div>

                        <div className="mt-4 text-center">
                            <h4 className="text-lg font-semibold">{current.title}</h4>
                            <p className="text-xs opacity-70">
                                {activeIndex + 1} / {items.length}
                            </p>
                        </div>

                        {/* MOBILE strelice ispod slike */}
                        {items.length > 1 && (
                            <div className="mt-4 flex md:hidden items-center justify-center gap-6">
                                <button
                                    type="button"
                                    onClick={onPrev}
                                    className="px-4 py-2 rounded-full border border-primary text-primary text-sm font-medium active:scale-95 transition"
                                >
                                    ‹ Prev
                                </button>
                                <button
                                    type="button"
                                    onClick={onNext}
                                    className="px-4 py-2 rounded-full border border-primary text-primary text-sm font-medium active:scale-95 transition"
                                >
                                    Next ›
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Next – DESKTOP ONLY (sa strane) */}
                    {items.length > 1 && (
                        <button
                            type="button"
                            onClick={onNext}
                            className="hidden md:inline-flex h-10 w-10 text-primary text-7xl items-center justify-center rounded-full"
                        >
                            ›
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
