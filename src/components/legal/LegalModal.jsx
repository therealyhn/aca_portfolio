import { useEffect, useId, useRef } from "react";

const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function LegalModal({ content, closeLabel, onClose }) {
    const titleId = useId();
    const dialogRef = useRef(null);

    useEffect(() => {
        const previousActiveElement = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const firstFocusableElement = dialogRef.current?.querySelector(focusableSelector);
        (firstFocusableElement || dialogRef.current)?.focus();

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key !== "Tab") return;

            const focusableElements = dialogRef.current?.querySelectorAll(focusableSelector);
            if (!focusableElements?.length) {
                event.preventDefault();
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
            previousActiveElement?.focus();
        };
    }, [onClose]);

    return (
        <div
            role="presentation"
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/85 p-0 backdrop-blur-sm md:items-center md:p-8"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <article
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
                className="flex max-h-[92dvh] w-full max-w-4xl animate-[fadeInUp_0.35s_ease_both] flex-col overflow-hidden bg-white text-text-heading md:max-h-[86dvh]"
            >
                <header className="flex shrink-0 items-start justify-between gap-6 border-b border-border-soft px-5 py-5 md:px-10 md:py-7">
                    <div>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-primary">
                            AJCreative
                        </p>
                        <h2
                            id={titleId}
                            className="mt-1 font-[Poppins] text-2xl font-semibold tracking-tight text-text-heading md:text-3xl"
                        >
                            {content.title}
                        </h2>
                        <p className="mt-1 text-xs text-text-base">{content.updatedAt}</p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label={closeLabel}
                        className="flex h-10 w-10 shrink-0 items-center justify-center border border-border-subtle text-text-heading transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            aria-hidden="true"
                        >
                            <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>
                </header>

                <div className="overflow-y-auto overscroll-contain px-5 py-7 md:px-10 md:py-9">
                    <p className="max-w-3xl border-l-2 border-primary pl-4 text-sm leading-7 text-text-base md:text-base">
                        {content.intro}
                    </p>

                    <div className="mt-9 space-y-9">
                        {content.sections.map((section) => (
                            <section key={section.title} className="max-w-3xl">
                                <h3 className="font-[Poppins] text-lg font-semibold tracking-tight text-text-heading md:text-xl">
                                    {section.title}
                                </h3>

                                {section.paragraphs?.map((paragraph) => (
                                    <p key={paragraph} className="mt-3 text-sm leading-7 text-text-base">
                                        {paragraph}
                                    </p>
                                ))}

                                {section.items && (
                                    <ul className="mt-3 space-y-2.5">
                                        {section.items.map((item) => (
                                            <li key={item} className="flex gap-3 text-sm leading-7 text-text-base">
                                                <span
                                                    aria-hidden="true"
                                                    className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 bg-primary"
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
