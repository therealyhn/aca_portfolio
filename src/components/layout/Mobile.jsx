import { useState, useEffect } from "react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },
];

export default function Mobile() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        setOpen(false);
    };

    return (
        <div className="md:hidden">
            {/* Gornja traka (logo + hamburger) */}
            <div
                className={`
          fixed top-0 inset-x-0 z-40
          border-b border-border-subtle
          transition-all duration-300
          ${scrolled || open ? "bg-white py-3" : "bg-white py-3"}
        `}
            >
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    <a href="#home" className="flex items-center">
                        <img
                            src="/img/logo/dark.png"
                            alt="Logo"
                            className="h-7 w-auto"
                        />
                    </a>

                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="relative h-8 w-8 flex items-center justify-center"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <div className="space-y-1">
                            <span
                                className={`block h-0.5 w-5 bg-black transition-transform ${open ? "translate-y-1.5 rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-5 bg-black transition-opacity ${open ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-5 bg-black transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Dropdown meni */}
            {open && (
                <nav className="fixed top-[56px] inset-x-0 z-30 bg-white border-b border-border-subtle">
                    <div className="max-w-6xl mx-auto px-4 py-3">
                        <ul className="space-y-2 text-sm font-medium">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={handleNavClick}
                                        className="block py-1 text-black"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )}

            <div className="h-[56px]" />
        </div>
    );
}
