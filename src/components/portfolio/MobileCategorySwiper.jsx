import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategoryCard from "./CategoryCard";

export default function MobileCategorySwiper({ categories, onCategoryClick }) {
    return (
        <div className="md:hidden mt-6">
            <Swiper spaceBetween={16} slidesPerView={1} centeredSlides={true}>
                {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <CategoryCard
                            category={category}
                            onClick={() => onCategoryClick(category)}
                            className="max-w-md mx-auto"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
