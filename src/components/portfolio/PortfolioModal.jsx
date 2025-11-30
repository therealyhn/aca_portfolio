export default function PortfolioModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-lg bg-background p-4 md:p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 text-text-muted hover:text-primary transition-colors text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {/* Title + category */}
        <div className="mb-4">
          <span className="block text-xs font-medium text-text-muted uppercase tracking-[0.3em] mb-1">
            {item.category}
          </span>
          <h3 className="text-xl font-semibold text-text-base">
            {item.title}
          </h3>
        </div>

        {/* Content */}
        <div className="mt-4">
          {item.type === "video" && item.videoUrl ? (
            <div className="relative w-full pb-[56.25%] overflow-hidden rounded-md">
              <iframe
                src={item.videoUrl}
                title={item.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-md object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
