export default function NewsCard({ post, onClick }) {
    return (
        <li className="wow fadeInLeft" data-wow-duration="1.5s">
            <div className="h-full flex flex-col">
                {/* Slika */}
                <button
                    type="button"
                    onClick={onClick}
                    className="relative overflow-hidden rounded-sm group"
                >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full aspect-[4/3] object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
                        loading="lazy"
                    />
                </button>

                {/* Detalji */}
                <div className="flex-1 pt-4 pr-4">
                    <h3 className="text-lg font-semibold mb-2">
                        <button
                            type="button"
                            onClick={onClick}
                            className="text-text-heading hover:text-primary transition-colors text-left"
                        >
                            {post.title}
                        </button>
                    </h3>
                    <p className="text-[11px] uppercase font-medium text-text-base/80 italic">
                        By{" "}
                        <span className="text-primary transition-colors">
                            {post.author}
                        </span>
                        <span className="relative ml-3 pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-3 before:bg-neutral-400">
                            {post.date}
                        </span>
                    </p>
                </div>
            </div>
        </li>
    );
}
