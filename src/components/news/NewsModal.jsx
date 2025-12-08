export default function NewsModal({ post, onClose }) {
    if (!post) return null;

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-background-dark/60 backdrop-blur-sm p-0 md:p-6 transition">
            <div
                className="relative w-full max-w-2xl xl:max-w-4xl h-[94vh] md:h-auto max-h-[94vh] 
                rounded-lg bg-background shadow-[0_8px_44px_rgba(67,67,67,0.21)] border border-border-subtle 
                overflow-hidden flex flex-col"
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 z-20 w-10 h-10 flex items-center justify-center
                        rounded-md shadow-md bg-background/80 border border-border-soft text-primary text-2xl transition hover:bg-primary/10 active:scale-95"
                    aria-label="Zatvori"
                >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <line x1="7" y1="7" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="21" y1="7" x2="7" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </button>

                {/* Image */}
                <div className="relative w-full max-h-60 sm:max-h-80 overflow-hidden flex-shrink-0 border-b border-border-subtle bg-neutral-100 group">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-5 pt-7 pb-6 md:px-10 md:pt-9 md:pb-8 bg-background">
                    <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
                        <div>
                            <h2 className="text-xl xs:text-2xl md:text-3xl font-extrabold tracking-tight mb-1 text-text-heading">{post.title}</h2>
                            <hr className="w-16 border-t-2 border-primary rounded-full my-2" />
                            <p className="text-xs sm:text-sm uppercase font-semibold tracking-wider text-primary/80 italic">
                                {post.author}
                                <span className="relative ml-4 pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-4 before:bg-border-subtle font-normal text-text-base/90">
                                    {post.date}
                                </span>
                            </p>
                        </div>

                        {post.quote && (
                            <blockquote className="border-l-4 border-primary/60 pl-5 italic text-base md:text-lg text-text-heading/90 bg-background-soft/80 py-2 rounded-md">
                                {post.quote}
                            </blockquote>
                        )}

                        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-text-base">
                            {post.content?.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        {/* Share section */}
                        <div className="pt-2 flex items-center gap-4">
                            <span className="font-semibold text-text-heading tracking-wide">Podeli:</span>
                            <ul className="flex items-center gap-2">
                                <li>
                                    <button
                                        type="button"
                                        className="group w-9 h-9 rounded-full bg-white/80 hover:bg-primary/10 flex items-center justify-center shadow transition"
                                        title="Share on Facebook"
                                    >
                                        <img
                                            src="/img/svg/social/facebook.svg"
                                            className="w-4 h-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-150"
                                            alt="Share on Facebook"
                                        />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="group w-9 h-9 rounded-full bg-white/80 hover:bg-primary/10 flex items-center justify-center shadow transition"
                                        title="Share on Instagram"
                                    >
                                        <img
                                            src="/img/svg/social/instagram.svg"
                                            className="w-4 h-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-150"
                                            alt="Share on Instagram"
                                        />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="group w-9 h-9 rounded-full bg-white/80 hover:bg-primary/10 flex items-center justify-center shadow transition"
                                        title="Share on TikTok"
                                    >
                                        <img
                                            src="/img/svg/social/tik-tok.svg"
                                            className="w-4 h-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-150"
                                            alt="Share on TikTok"
                                        />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="group w-9 h-9 rounded-full bg-white/80 hover:bg-primary/10 flex items-center justify-center shadow transition"
                                        title="Share via Email"
                                    >
                                        <img
                                            src="/img/svg/mail.svg"
                                            className="w-4 h-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-150"
                                            alt="Share via Email"
                                        />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
