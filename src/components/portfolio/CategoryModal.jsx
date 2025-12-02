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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            <div
                className="relative bg-background rounded-xl shadow-2xl overflow-hidden w-full max-w-[1100px] h-[85vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header (NE scrolluje se) */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border-soft bg-background-soft shadow-md z-10">
                    <div>
                        <h3 className="text-xl font-semibold text-text-base">{title}</h3>
                        <p className="text-sm text-text-muted">
                            {items.length} {items.length === 1 ? "photo" : "photos"}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-3 right-4 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
                    >
                        X
                    </button>
                </div>

                {/* content */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                    {items.length === 0 ? (
                        <p className="text-sm text-text-muted text-center">
                            No images in this category.
                        </p>
                    ) : (
                        <ul className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {items.map((item, index) => (
                                <li key={item.id ?? index}>
                                    <button
                                        type="button"
                                        onClick={() => onItemClick(index)}
                                        className="group block w-full text-left rounded-xl overflow-hidden bg-background-soft 
                                        border border-border-subtle transition-all hover:border-primary hover:shadow-lg">
                                        <div className="aspect-[4/5] overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        </div>

                                        <div className="px-3 py-2">
                                            <p className="text-sm font-medium text-text-base truncate">
                                                {item.title}
                                            </p>
                                            {item.subtitle && (
                                                <p className="text-xs text-text-muted truncate">
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
