export default function CategoryModal({ category, items, onClose }) {
    if (!category) return null;

    const hasItems = items && items.length > 0;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl rounded-lg bg-background p-4 md:p-6 shadow-xl max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-3 top-3 text-text-muted hover:text-primary transition-colors text-3xl leading-none"
                    aria-label="Close"
                >
                    ×
                </button>

                {/* Header */}
                <div className="mb-4 pr-8">
                    <span className="block text-xs font-medium text-primary uppercase tracking-[0.3em] mb-1">
                        Portfolio kategorija
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-text-base">
                        {category.title}
                    </h3>
                    {category.description && (
                        <p className="mt-1 text-sm text-text-muted">
                            {category.description}
                        </p>
                    )}
                </div>

                {/* Grid radova */}
                <div className="mt-2 overflow-y-auto pr-1">
                    {hasItems ? (
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {items.map((item) => (
                                <figure
                                    key={item.id}
                                    className="overflow-hidden rounded-md bg-background-soft"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                    <figcaption className="px-3 py-2 text-xs text-primary">
                                        {item.title}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-text-muted">
                            Trenutno nema radova u ovoj kategoriji.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
