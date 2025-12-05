export default function NewsModal({ post, onClose }) {
    if (!post) return null;

    return (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4">
            {/* OUTER CONTAINER */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-xl overflow-hidden">

                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-6 md:right-10 top-3 z-10 text-text-muted hover:text-primary transition-colors text-4xl"
                >
                    x
                </button>

                {/* SCROLLABLE MODAL CONTENT */}
                <div className="overflow-y-auto max-h-[90vh]">

                    {/* Image */}
                    <div className="relative max-h-[320px] overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Text content */}
                    <div className="p-6 md:p-8 space-y-5">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                                {post.title}
                            </h2>

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

                        {/* Quote */}
                        {post.quote && (
                            <blockquote className="border-l-2 border-primary pl-4 italic text-text-heading">
                                {post.quote}
                            </blockquote>
                        )}

                        {/* Paragraphs */}
                        <div className="space-y-3 text-sm leading-relaxed text-text-base">
                            {post.content?.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        {/* Share section */}
                        <div className="pt-3 flex items-center gap-3">
                            <span className="font-semibold text-text-heading">Share:</span>
                            <ul className="flex items-center gap-3">
                                <li>
                                    <img src="/img/svg/social/facebook.svg" className="w-4 h-4" />
                                </li>
                                <li>
                                    <img src="/img/svg/social/instagram.svg" className="w-4 h-4" />
                                </li>
                                <li>
                                    <img src="/img/svg/social/tik-tok.svg" className="w-4 h-4" />
                                </li>
                                <li>
                                    <img src="/img/svg/mail.svg" className="w-4 h-4" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* END SCROLLABLE AREA */}
            </div>
        </div>
    );
}
