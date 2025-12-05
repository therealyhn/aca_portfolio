import { useEffect, useState, useRef } from "react";
import { portfolioCategories, portfolioItems } from "../../data/portfolioData";
import CategoryCard from "../portfolio/CategoryCard";
import CategoryModal from "../portfolio/CategoryModal";
import ImageGalleryModal from "../portfolio/ImageGalleryModal";
import MobileCategorySwiper from "../portfolio/MobileCategorySwiper";
import "animate.css";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Radovi za aktivnu kategoriju
  const itemsForActiveCategory = activeCategory
    ? portfolioItems.filter((item) => item.categoryId === activeCategory.id)
    : [];

  // Koje kategorije prikazujemo u gridu (desktop)
  const visibleCategories = showAll
    ? portfolioCategories
    : portfolioCategories.slice(0, 3);

  const openCategory = (category) => {
    setActiveCategory(category);
    setActiveImageIndex(null);
  };

  const closeCategory = () => {
    setActiveCategory(null);
    setActiveImageIndex(null);
  };

  const closeImage = () => {
    setActiveImageIndex(null);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => {
      if (prev === null || itemsForActiveCategory.length === 0) return prev;
      return (prev - 1 + itemsForActiveCategory.length) % itemsForActiveCategory.length;
    });
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => {
      if (prev === null || itemsForActiveCategory.length === 0) return prev;
      return (prev + 1) % itemsForActiveCategory.length;
    });
  };

  // Lock scroll kad je neki modal otvoren
  useEffect(() => {
    const hasModalOpen = activeCategory !== null;
    if (!hasModalOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeCategory]);


  // animation trigger
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

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="bg-background-soft py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Naslov */}
        <div className={`mb-12 text-center md:text-left ${visible ? "animate__animated animate__fadeInUp animate__slow" : "opacity-0"}`}>
          <h2 className="inline-block text-xs sm:text-sm md:text-base tracking-[0.25em] md:tracking-[0.6em] uppercase font-semibold text-text-heading mb-2">
            Odabrani <span className="text-primary">Radovi</span>
          </h2>
        </div>

        {/* DESKTOP/TABLET GRID (MD+) */}
        <div className="hidden md:block">
          <ul className="grid gap-8 sm:gap-10 lg:gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => openCategory(category)}
                className={`${visible ? "animate__animated animate__fadeInUp animate__faster animate__slow" : "opacity-0"}`}
              />
            ))}
          </ul>

          {/* Show more / less dugme samo na md+ */}
          <div className={`mt-12 flex justify-center ${visible ? "animate__animated animate__fadeInUp animate__slow" : "opacity-0"}`}>
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center rounded-md border border-primary px-10 py-3 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              {showAll ? "PRIKAŽI MANJE" : "PRIKAŽI VIŠE"}
            </button>
          </div>
        </div>

        {/* MOBILE SWIPER  < MD */}
        <div className={`${visible ? "animate__animated animate__fadeInUp animate__slow" : "opacity-0"}`}>
          <MobileCategorySwiper categories={portfolioCategories} onCategoryClick={openCategory} />
        </div>
      </div>

      {/* Modal sa radovima iz kategorije */}
      {activeCategory && activeImageIndex == null && (
        <CategoryModal
          category={activeCategory}
          items={itemsForActiveCategory}
          onClose={closeCategory}
          onItemClick={(index) => setActiveImageIndex(index)}
        />
      )}

      {/* Gallery modal za pojedinačnu sliku (swiper-like) */}
      {activeCategory && activeImageIndex != null && (
        <ImageGalleryModal
          items={itemsForActiveCategory}
          activeIndex={activeImageIndex}
          onClose={closeImage}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </section>
  );
}
