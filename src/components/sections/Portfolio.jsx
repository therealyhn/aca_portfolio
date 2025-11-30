import { useState, useEffect } from "react";
import portfolioItems from "../../data/portfolioItems";
import PortfolioCard from "../portfolio/PortfolioCard";
import PortfolioModal from "../portfolio/PortfolioModal";

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState(null);

  const closeModal = () => setActiveItem(null);

  // (bonus) lock scroll kad je modal otvoren
  useEffect(() => {
    if (activeItem) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [activeItem]);

  return (
    <section id="portfolio" className="bg-background-soft py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-sm md:text-base tracking-[0.6em] uppercase font-semibold text-text-base mb-2">
            Selected <span className="text-primary">Works</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="pt-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onClick={() => setActiveItem(item)}
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Modal kao posebna komponenta */}
      <PortfolioModal item={activeItem} onClose={closeModal} />
    </section>
  );
}
