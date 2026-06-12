export default function FooterLegalLinks({ copy, onOpen }) {
    return (
        <nav
            aria-label={copy.ariaLabel}
            className="mt-3 flex items-center justify-center gap-3 text-[0.68rem] font-medium tracking-wide text-gray-500 md:justify-end"
        >
            <button
                type="button"
                onClick={() => onOpen("privacy")}
                className="transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark"
            >
                {copy.privacy}
            </button>
            <span aria-hidden="true" className="h-3 w-px bg-white/20" />
            <button
                type="button"
                onClick={() => onOpen("terms")}
                className="transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark"
            >
                {copy.terms}
            </button>
        </nav>
    );
}
