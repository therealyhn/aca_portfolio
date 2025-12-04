import { useEffect, useState } from "react";
import { portfolioCategories, portfolioItems } from "../../data/portfolioData";
import CategoryCard from "../portfolio/CategoryCard";
import CategoryModal from "../portfolio/CategoryModal";
import ImageGalleryModal from "../portfolio/ImageGalleryModal";
import "animate.css";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Radovi za aktivnu kategoriju
  const itemsForActiveCategory = activeCategory
    ? portfolioItems.filter((item) => item.categoryId === activeCategory.id)
    : [];

  // Koje kategorije su trenutno vidljive
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

  // Lock scroll kada je otvoren bilo koji modal
  useEffect(() => {
    const hasModalOpen = activeCategory !== null;
    if (!hasModalOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeCategory]);

  return (
    <section id="portfolio" className="bg-background-soft py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Naslov */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="inline-block text-xs sm:text-sm md:text-base tracking-[0.25em] md:tracking-[0.6em] uppercase font-semibold text-text-heading mb-2 animate__animated animate__fadeInUp">
            Odabrani <span className="text-primary">Radovi</span>
          </h2>
        </div>

        {/* Grid kategorija */}
        <div className="pt-6">
          <ul className="grid gap-8 sm:gap-10 lg:gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => openCategory(category)}
                className="animate__animated animate__fadeInUp animate__faster"
              />
            ))}
          </ul>
        </div>

        {/* Show more / less dugme */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center rounded-md border border-primary px-10 py-3 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-primary hover:bg-primary hover:text-white transition-all duration-300 animate__animated animate__fadeInUp"
          >
            {showAll ? "PRIKAŽI MANJE" : "PRIKAŽI VIŠE"}
          </button>
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
