import { useEffect, useState } from "react";
import { portfolioCategories, portfolioItems, } from "../../data/portfolioData";
import CategoryCard from "../portfolio/CategoryCard";
import CategoryModal from "../portfolio/CategoryModal";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(null);

  const closeModal = () => setActiveCategory(null);

  // Zaključavanje scroll-a kad je modal otvoren
  useEffect(() => {
    if (activeCategory) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [activeCategory]);

  // Radovi samo za aktivnu kategoriju
  const itemsForActiveCategory = activeCategory
    ? portfolioItems.filter((item) => item.categoryId === activeCategory.id)
    : [];

  return (
    <section id="portfolio" className="bg-background-soft py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-sm md:text-base tracking-[0.6em] uppercase font-semibold text-text-base mb-2">
            Selected <span className="text-primary">Works</span>
          </h2>
        </div>

        {/* Grid kategorija */}
        <div className="pt-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Modal sa radovima iz kategorije */}
      <CategoryModal
        category={activeCategory}
        items={itemsForActiveCategory}
        onClose={closeModal}
      />
    </section>
  );
}
