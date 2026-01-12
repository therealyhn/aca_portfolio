import { useState, useEffect } from "react";
import useActiveSection from "../../hooks/useActiveSection";
import useSiteSettings from "../../hooks/useSiteSettings";
import { urlFor } from "../../lib/sanityClient";

const navLinks = [
    { label: "Početna", href: "home" },
    { label: "O meni", href: "about" },
    { label: "Portfolio", href: "portfolio" },
    { label: "Blog", href: "news" },
    { label: "Kontakt", href: "contact" },
];

export default function Mobile() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { settings } = useSiteSettings();

    const activeSection = useActiveSection(navLinks.map((link) => link.href));

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const logoLight = settings?.navLogoLight
        ? urlFor(settings.navLogoLight).height(56).url()
        : "/img/logo/logo.png";
    const logoDark = settings?.navLogoDark
        ? urlFor(settings.navLogoDark).height(56).url()
        : "/img/logo/dark.png";

    return (
        <div className="md:hidden">
            {/* HEADER WRAPPER */}
            <header className="fixed top-0 inset-x-0 z-40">
                <div
                    className={`h-14 flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? "bg-white shadow-sm border-b" : "bg-transparent"
                        }`}
                >
                    {/* LOGO */}
                    <img
                        src={scrolled ? logoDark : logoLight}
                        className="h-7 transition-all"
                        alt="Logo"
                        loading="lazy"
                    />

                    {/* BURGER */}
                    <button onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
                        <div className="space-y-1">
                            <span className="block h-0.5 w-6 bg-primary" />
                            <span className="block h-0.5 w-6 bg-primary" />
                            <span className="block h-0.5 w-6 bg-primary" />
                        </div>
                    </button>
                </div>
            </header>

            {/* MENU LIST – overlay ispod headera */}
            {open && (
                <nav className="fixed top-14 inset-x-0 bg-white z-30 border-b shadow-md">
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

                                            // delay
                                            setTimeout(() => {
                                                document
                                                    .querySelector(`#${link.href}`)
                                                    ?.scrollIntoView({ behavior: "smooth" });
                                            }, 30);
                                        }}
                                        className={`block py-1 text-base ${isActive ? "text-primary font-semibold" : "text-black"
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
