import { useEffect, useState } from "react";
import { portfolioCategories, portfolioItems, } from "../../data/portfolioData";
import CategoryCard from "../portfolio/CategoryCard";
import CategoryModal from "../portfolio/CategoryModal";
import ImageGalleryModal from "../portfolio/ImageGalleryModal";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Radovi koji pripadaju aktivnoj kategoriji
  const itemsForActiveCategory = activeCategory
    ? portfolioItems.filter(
      (item) => item.categoryId === activeCategory.id
    )
    : [];

  const openCategory = (category) => {
    setActiveCategory(category);
    setActiveImageIndex(null); // reset slike
  };

  const closeCategory = () => {
    setActiveCategory(null);
    setActiveImageIndex(null);
  };

  // const openImage = (index) => {
  //   setActiveImageIndex(index);
  // };

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

  // Lock scroll 
  useEffect(() => {
    if (activeCategory) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [activeCategory]);

  return (
    <section id="portfolio" className="bg-background-soft py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-sm md:text-base tracking-[0.2em] md:tracking-[0.6em] uppercase font-semibold text-text-heading mb-2 inline-block">
            Odabrani <span className="text-primary">Radovi</span>
          </h2>
        </div>

        {/* Grid kategorija */}
        <div className="pt-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => openCategory(category)}
              />
            ))}
          </ul>
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
