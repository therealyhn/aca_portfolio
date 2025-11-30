export default function PortfolioCard({ item, onClick }) {
    return (
        <li>
            <button
                type="button"
                onClick={onClick}
                className="group relative block w-full overflow-hidden rounded-lg bg-background shadow-md"
            >
                {/* Slika */}
                <div className="relative">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-background-soft/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Detalji */}
                <div className="pointer-events-none absolute left-0 right-0 bottom-4 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-5">
                    <span className="block text-xs font-medium text-text-base mb-1">
                        {item.category}
                    </span>
                    <h3 className="text-base font-semibold text-text-base">
                        {item.title}
                    </h3>
                </div>
            </button>
        </li>
    );
}
