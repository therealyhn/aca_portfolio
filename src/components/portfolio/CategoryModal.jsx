// src/components/portfolio/CategoryModal.jsx
import { useEffect } from "react";
import { urlFor } from "../../lib/sanityClient";

export default function CategoryModal({
    category,
    items,
    onClose,
    onItemClick,
}) {
    const title = category?.title || category?.name || "Category";

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!category) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-5 select-none bg-background-dark/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-background border-text-heading/20 rounded-sm shadow-[0_8px_44px_rgba(67,67,67,0.13)] overflow-hidden w-full max-w-[1160px] h-[88vh] flex flex-col lg:rounded-sm transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5 border-b-2 border-border-subtle bg-background-soft/95 shadow-sm z-20 sticky top-0">
                    <div className="flex flex-col gap-1 w-full">
                        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl tracking-wide uppercase text-text-heading truncate break-words max-w-xs sm:max-w-sm md:max-w-none">
                            {title}
                        </h3>
                        <p className="text-sm text-primary tracking-widest">
                            {items.length} {items.length === 1 ? "photo" : "photos"}
                        </p>
                        <hr className="border-t-2 border-primary w-1/3 mt-2 rounded-full" />
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute right-4 md:right-8 top-3.5 z-10 w-10 h-10 flex items-center justify-center text-base font-black text-primary hover:text-theme-black border border-primary hover:border-theme-black rounded-sm transition-all duration-150 bg-background/70 shadow-md active:scale-95"
                    >
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <line x1="7" y1="7" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="21" y1="7" x2="7" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-4 md:px-8 py-5 md:py-7 bg-background">
                    {items.length === 0 ? (
                        <p className="text-base text-text-base text-center font-semibold opacity-50 tracking-wide mt-12">
                            Ne postoje slike u ovoj kategoriji.
                        </p>
                    ) : (
                        <ul className="grid gap-5 sm:gap-9 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {items.map((item, index) => {
                                const thumbUrl = item.image
                                    ? urlFor(item.image).width(600).height(750).fit("crop").url()
                                    : "https://placehold.co/600x750?text=Rad";

                                return (
                                    <li key={item.id ?? item._id ?? item._key ?? index}>
                                        <button
                                            type="button"
                                            onClick={() => onItemClick(index)}
                                            className="group block w-full text-left rounded-2xl border border-border-soft overflow-hidden bg-background-soft shadow-none transition-all hover:border-primary focus:border-primary hover:shadow-2xl hover:scale-[1.045] active:scale-100 duration-200 backdrop-blur-[2.5px]"
                                            tabIndex={0}
                                        >
                                            <div className="aspect-[4/5] overflow-hidden relative group">
                                                <img
                                                    src={thumbUrl}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.08] group-hover:brightness-105 group-hover:contrast-125"
                                                    loading="lazy"
                                                    style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)" }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none transition-all duration-200 group-hover:from-primary/10 group-hover:via-transparent group-hover:to-transparent" />
                                                <span className="absolute -top-8 -left-8 w-3/4 h-1/3 rotate-12 bg-white/25 opacity-0 group-hover:opacity-25 blur-xl rounded-full pointer-events-none transition-opacity duration-300" />
                                                <span className="absolute inset-0 rounded-sm border-2 border-primary opacity-0 group-hover:opacity-15 pointer-events-none transition-opacity duration-200" />
                                            </div>

                                            <div className="px-4 pt-3 pb-4 bg-background/70 backdrop-blur-sm border-t border-border-soft">
                                                <div className="relative">
                                                    <span className="absolute right-0 bottom-0 h-1 w-2/5 bg-primary/60 rounded-lg group-hover:bg-primary/20 transition-all duration-200" />
                                                    <p className="text-base font-semibold text-theme-black tracking-tight truncate group-hover:text-primary transition-colors duration-200 leading-tight relative md:pl-4 pb-2">
                                                        {item.title}
                                                    </p>
                                                </div>
                                                {item.subtitle && (
                                                    <p className="text-xs text-text-base/70 truncate mt-1 group-hover:opacity-90 italic font-medium">
                                                        {item.subtitle}
                                                    </p>
                                                )}
                                            </div>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
