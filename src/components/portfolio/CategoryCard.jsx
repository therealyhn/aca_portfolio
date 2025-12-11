export default function CategoryCard({ category, onClick, className = "" }) {
    const imageUrl =
        category.image || "https://placehold.co/900x600?text=Kategorija";

    return (
        <li className={className}>
            <button
                type="button"
                onClick={onClick}
                className="group block w-full overflow-hidden rounded-sm bg-background shadow-md text-left"
            >
                {/* Slika pozadine */}
                <div className="relative">
                    <img
                        src={imageUrl}
                        alt={category.alt || category.title}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                        loading="lazy"
                    />
                </div>

                {/* Tekst ispod slike */}
                <div className="p-5 bg-background-soft">
                    <span className="block text-md font-bold uppercase tracking-[0.3em] text-primary mb-1">
                        Kategorija
                    </span>
                    <h3 className="text-lg font-semibold text-text-base">
                        {category.title}
                    </h3>
                    {category.description && (
                        <p className="mt-1 text-xs text-text-muted line-clamp-2">
                            {category.description}
                        </p>
                    )}
                </div>
            </button>
        </li>
    );
}
