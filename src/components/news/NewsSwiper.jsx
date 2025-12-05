import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";

import NewsCard from "./NewsCard";

export default function NewsSwiper({ posts, onPostClick }) {
    if (!posts || posts.length === 0) return null;

    return (
        <div className="relative px-2">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                centeredSlides={false}
                slidesPerView={1}
                navigation={{
                    nextEl: ".news-next",
                    prevEl: ".news-prev",
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet bg-gray-400",
                    bulletActiveClass: "swiper-pagination-bullet-active bg-primary",
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="relative z-20 pb-10"
            >
                {posts.map((post) => (
                    <SwiperSlide key={post.id}>
                        <div className="max-w-xs mx-auto animate__animated animate__fadeInUp">
                            <NewsCard post={post} onClick={() => onPostClick(post)} />
                        </div>
                    </SwiperSlide>
                ))}

                <button className="hidden md:block news-prev absolute left-0 top-1/3 -translate-y-1/2 text-6xl text-primary opacity-70 hover:opacity-100 transition z-50 pointer-events-auto">
                    ‹
                </button>
                <button className="hidden md:block news-next absolute right-0 top-1/3 -translate-y-1/2 text-6xl text-primary opacity-70 hover:opacity-100 transition z-50 pointer-events-auto">
                    ›
                </button>
            </Swiper>
        </div>
    );
}
