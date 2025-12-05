import { useEffect, useState, useRef } from "react";
import { newsPosts } from "../../data/newsData";
import NewsModal from "../../components/news/NewsModal";
import NewsSwiper from "../../components/news/NewsSwiper";
import "animate.css";

export default function News() {

    const [activePost, setActivePost] = useState(null);
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

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

                {/* Swiper */}
                <div className={`${visible ? "animate__animated animate__fadeInUp animate__faster animate__slow" : "opacity-0"} pt-6`}>
                    <NewsSwiper posts={newsPosts} onPostClick={setActivePost} />
                </div>
            </div>

            {/* Modal */}
            {activePost && <NewsModal post={activePost} onClose={() => setActivePost(null)} />}
        </section>
    );
}
