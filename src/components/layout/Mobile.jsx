import { useState, useEffect } from "react";
import useActiveSection from "../../hooks/useActiveSection";

const navLinks = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Portfolio", href: "portfolio" },
    { label: "News", href: "news" },
    { label: "Contact", href: "contact" },
];

export default function Mobile() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const activeSection = useActiveSection(navLinks.map(link => link.href));

    // Scroll detection (za transparent → white bg)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="md:hidden">
            {/* HEADER */}
            <div
                className={`
                    fixed top-0 inset-x-0 z-40
                    flex justify-between items-center
                    px-4 py-3 
                    transition-all duration-300
                    ${scrolled ? "bg-white shadow-sm border-b" : "bg-transparent"}
                `}
            >
                {/* LOGO */}
                <img
                    src={scrolled ? "/img/logo/dark.png" : "/img/logo/logo.png"}
                    className="h-7 transition-all"
                />

                {/* BURGER */}
                <button onClick={() => setOpen(!open)}>
                    <div className="space-y-1">
                        <span className="block h-0.5 w-6 bg-primary" />
                        <span className="block h-0.5 w-6 bg-primary" />
                        <span className="block h-0.5 w-6 bg-primary" />
                    </div>
                </button>
            </div>

            {/* MENU LIST – overlay */}
            {open && (
                <nav className="fixed top-[56px] inset-x-0 bg-white z-30 border-b shadow-md">
                    <ul className="px-4 py-4 space-y-3">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;

                            return (
                                <li key={link.href}>
                                    <a
                                        href={`#${link.href}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpen(false);

                                            // SAČEKAJ zatvaranje → onda skroluj
                                            setTimeout(() => {
                                                document
                                                    .querySelector(`#${link.href}`)
                                                    ?.scrollIntoView({
                                                        behavior: "smooth",
                                                    });
                                            }, 30);
                                        }}
                                        className={`block py-1 text-base ${isActive
                                                ? "text-primary font-semibold"
                                                : "text-black"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}
        </div>
    );
}
