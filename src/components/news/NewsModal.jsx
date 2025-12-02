export default function NewsModal({ post, onClose }) {
    if (!post) return null;

    return (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center">
            <div className="relative w-full max-w-5xl max-h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden">
                {/* Close dugme gore desno */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black focus:outline-none"
                    aria-label="Close"
                >
                    ×
                </button>

                {/* Scrollable content */}
                <div className="h-full overflow-y-auto">
                    {/* Slika */}
                    <div className="relative max-h-[320px] overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Tekstualni deo */}
                    <div className="p-6 md:p-8 space-y-4">
                        <div className="mb-4">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                                {post.title}
                            </h2>
                            <p className="text-[11px] uppercase font-medium text-text-base/80 italic">
                                By{" "}
                                <span className="hover:text-primary transition-colors">
                                    {post.author}
                                </span>
                                <span className="relative ml-3 pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-3 before:bg-neutral-400">
                                    {post.date}
                                </span>
                            </p>
                        </div>

                        {/* Quote */}
                        {post.quote && (
                            <blockquote className="border-l-2 border-primary pl-4 italic text-text-heading">
                                {post.quote}
                            </blockquote>
                        )}

                        {/* Paragrafi */}
                        <div className="space-y-3 text-sm leading-relaxed text-text-base">
                            {post.content?.map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </div>

                        {/* Share */}
                        <div className="mt-5 flex items-center gap-3">
                            <span className="font-semibold text-text-heading">Share:</span>
                            <ul className="flex items-center gap-3">
                                <li>
                                    <a href="#" className="text-text-heading hover:text-primary">
                                        <img
                                            src="/img/svg/social/facebook.svg"
                                            className="w-4 h-4"
                                            alt="Facebook"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-heading hover:text-primary">
                                        <img
                                            src="/img/svg/social/twitter.svg"
                                            className="w-4 h-4"
                                            alt="Twitter"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-heading hover:text-primary">
                                        <img
                                            src="/img/svg/social/behance.svg"
                                            className="w-4 h-4"
                                            alt="Behance"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-heading hover:text-primary">
                                        <img
                                            src="/img/svg/social/dribbble.svg"
                                            className="w-4 h-4"
                                            alt="Dribbble"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
