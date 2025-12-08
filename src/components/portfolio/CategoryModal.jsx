export default function CategoryModal({
    category,
    items,
    onClose,
    onItemClick,
}) {
    if (!category) return null;

    const title = category.title || category.name || "Category";

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-5 select-none"
            onClick={onClose}
        >
            <div
                className="relative bg-background border-text-heading/20 rounded-sm shadow-[0_8px_44px_rgba(67,67,67,0.13)] overflow-hidden w-full max-w-[1160px] h-[88vh] flex flex-col lg:rounded-sm transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header (sticky + modern, sharper font, accent line) */}
                <div className="flex items-center justify-between px-8 py-5 border-b-2 border-border-subtle bg-background-soft/95 shadow-sm z-20 sticky top-0">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-2xl tracking-wide uppercase text-text-heading">{title}</h3>
                        <p className="text-xs font text-primary tracking-widest">
                            {items.length} {items.length === 1 ? "photo" : "photos"}
                        </p>
                        <hr className="border-t-2 border-primary w-1/2 mt-2 rounded-full" />
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute right-8 top-3.5 z-10 w-10 h-10 flex items-center justify-center text-base font-black text-primary hover:text-theme-black border border-primary hover:border-theme-black rounded-sm transition-all duration-150 bg-background/70 shadow-md active:scale-95"
                    >
                        {/* Close (sharp × icon) */}
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <line x1="7" y1="7" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="21" y1="7" x2="7" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* content */}
                <div className="flex-1 overflow-y-auto px-8 py-7 bg-background">
                    {items.length === 0 ? (
                        <p className="text-base text-text-base text-center font-semibold opacity-50 tracking-wide mt-12">
                            Ne postoje slike u ovoj kategoriji.
                        </p>
                    ) : (
                        <ul className="grid gap-5 sm:gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {items.map((item, index) => (
                                <li key={item.id ?? index}>
                                    <button
                                        type="button"
                                        onClick={() => onItemClick(index)}
                                        className="group block w-full text-left rounded-sm border-2 border-border-soft overflow-hidden bg-background-soft/80 shadow-[0_2px_10px_rgba(50,50,50,0.07)] 
                                        transition-all hover:border-primary focus:border-primary hover:shadow-xl hover:scale-105 active:scale-100 duration-150"
                                        tabIndex={0}
                                    >
                                        <div className="aspect-[4/5] overflow-hidden relative group">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125 group-hover:brightness-[102%] group-hover:contrast-110"
                                                loading="lazy" />
                                            <div className="absolute inset-0 pointer-events-none group-hover:bg-gradient-to-t group-hover:from-primary/10 group-hover:to-transparent transition-all duration-200" />
                                        </div>

                                        <div className="px-4 pt-3 pb-4 bg-background">
                                            <p className="text-base font-semibold text-theme-black tracking-tight truncate group-hover:text-primary transition-colors duration-150 leading-tight">
                                                {item.title}
                                            </p>
                                            {item.subtitle && (
                                                <p className="text-xs text-text-base/70 truncate mt-1 group-hover:opacity-80">
                                                    {item.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
