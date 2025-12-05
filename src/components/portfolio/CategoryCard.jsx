export default function CategoryCard({ category, onClick, className = "" }) {
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
                        src={category.coverImage}
                        alt={category.title}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Tekst ispod slike (naslov + kratak opis) */}
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
