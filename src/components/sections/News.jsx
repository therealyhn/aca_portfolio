import { useEffect, useState } from "react";
import { newsPosts } from "../../data/newsData";
import NewsCard from "../../components/news/NewsCard";
import NewsModal from "../../components/news/NewsModal";

export default function News() {
    const [activePost, setActivePost] = useState(null);

    // Lock scroll kad je modal otvoren
    useEffect(() => {
        if (activePost) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [activePost]);

    return (
        <section id="news" className="bg-background-soft py-20 md:py-24">
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-sm md:text-base tracking-[0.2em] md:tracking-[0.6em] uppercase font-semibold text-text-heading mb-2 inline-block">
                        Najnovije sa <span className="text-primary">Bloga</span>
                    </h2>
                </div>

                {/* Lista kartica */}
                <div className="pt-6">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {newsPosts.map((post) => (
                            <NewsCard
                                key={post.id}
                                post={post}
                                onClick={() => setActivePost(post)}
                            />
                        ))}
                    </ul>
                </div>
            </div>

            {/* Modal */}
            {activePost && (
                <NewsModal post={activePost} onClose={() => setActivePost(null)} />
            )}
        </section>
    );
}
