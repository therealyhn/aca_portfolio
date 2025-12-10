// src/components/portfolio/MobileCategorySwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryCard from "./CategoryCard";

export default function MobileCategorySwiper({ categories, onCategoryClick }) {
    if (!categories || categories.length === 0) return null;

    return (
        <div className="md:hidden mt-10 relative px-2">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                centeredSlides={true}
                navigation={{
                    nextEl: ".mobile-next",
                    prevEl: ".mobile-prev",
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet bg-gray-400 opacity-50",
                    bulletActiveClass: "swiper-pagination-bullet-active bg-primary opacity-100",
                }}
                className="relative z-20 pb-10"
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <CategoryCard
                            category={category}
                            onClick={() => onCategoryClick(category)}
                            className="max-w-xs mx-auto animate__animated animate__fadeInUp"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
