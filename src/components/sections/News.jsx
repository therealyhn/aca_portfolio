// src/sections/News.jsx
import { useEffect, useState, useRef } from "react";
import NewsModal from "../../components/news/NewsModal";
import NewsSwiper from "../../components/news/NewsSwiper";
import { sanityClient, urlFor } from "../../lib/sanityClient";
import { formatDate } from "../../utils/formatDate";
import "animate.css";

const FALLBACK_IMAGE = "https://placehold.co/900x600?text=News";

const buildNewsImageUrl = (img) => {
    if (!img || !img.asset || (!img.asset._ref && !img.asset._id)) {
        return FALLBACK_IMAGE;
    }

    try {
        return urlFor(img)
            .width(1200)
            .fit("max")
            .auto("format")
            .quality(80)
            .url();
    } catch (e) {
        console.error("Greška u buildNewsImageUrl:", e, img);
        return FALLBACK_IMAGE;
    }
};

export default function News() {
    const [posts, setPosts] = useState([]);
    const [activePost, setActivePost] = useState(null);
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // FETCH iz Sanity-ja
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "newsPost"] | order(publishedAt desc){
                    _id,
                    title,
                    publishedAt,
                    category,
                    author,
                    excerpt,
                    content,
                    highlightQuote,
                    mainImage
                }`
            )
            .then((data) => {
                const mapped = data.map((post) => ({
                    id: post._id,
                    title: post.title,
                    author: post.author || "",
                    date: formatDate(post.publishedAt),
                    image: buildNewsImageUrl(post.mainImage),
                    category: post.category || "",
                    excerpt: post.excerpt || "",
                    // content je array od stringova u schemi
                    content: post.content || [],
                    quote: post.highlightQuote || "",
                }));

                setPosts(mapped);
            })
            .catch((err) => {
                console.error("Greška pri fetchovanju news objava:", err);
            });
    }, []);

    // anim trigger
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.7 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Lock scroll kada je modal otvoren
    useEffect(() => {
        if (!activePost) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [activePost]);

    return (
        <section
            id="news"
            ref={sectionRef}
            className="bg-background-soft py-20 md:py-24"
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <div className={`mb-12 text-center md:text-left ${visible ? "animate__animated animate__fadeInUp animate__slow" : "opacity-0"}`}>
                    <h2 className="text-sm md:text-base tracking-[0.2em] md:tracking-[0.6em] uppercase font-semibold text-text-heading mb-2 inline-block">
                        Najnovije sa <span className="text-primary">Bloga</span>
                    </h2>
                </div>

                {/* Ako nema postova */}
                {posts.length === 0 ? (
                    <p className={`${visible ? "animate__animated animate__fadeInUp animate__slow" : "opacity-0"} text-center text-text-base/70`}>
                        Trenutno nema objavljenih vesti.
                    </p>
                ) : (
                    <div className={`${visible ? "animate__animated animate__fadeInUp animate__faster animate__slow" : "opacity-0"} pt-6`}>
                        <NewsSwiper posts={posts} onPostClick={setActivePost} />
                    </div>
                )}
            </div>

            {/* Modal */}
            {activePost && (
                <NewsModal post={activePost} onClose={() => setActivePost(null)} />
            )}
        </section>
    );
}
