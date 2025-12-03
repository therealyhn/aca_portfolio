import { useEffect, useState } from "react";
import useActiveSection from "../../hooks/useActiveSection";

const navLinks = [
    { label: "Početna", href: "home" },
    { label: "O meni", href: "about" },
    { label: "Portfolio", href: "portfolio" },
    { label: "Blog", href: "news" },
    { label: "Kontakt", href: "contact" },
];

export default function Topbar() {
    const [scrolled, setScrolled] = useState(false);

    const activeSection = useActiveSection(navLinks.map((link) => link.href));

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`
        fixed top-0 left-0 right-0 z-40 hidden md:block
        transition-all duration-500
        ${scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-7"}
      `}
        >
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#home">
                    {!scrolled ? (
                        <img src="/img/logo/logo.png" className="h-8" alt="Logo light" />
                    ) : (
                        <img src="/img/logo/dark.png" className="h-8" alt="Logo dark" />
                    )}
                </a>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-8 text-md uppercase font-medium">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;

                            return (
                                <li key={link.href} className="relative">
                                    <a
                                        href={`#${link.href}`}
                                        className={`
                      transition-colors pb-1
                      ${scrolled ? "text-black" : "text-white"}
                      ${isActive ? "text-primary" : "hover:text-primary"}
                    `}
                                    >
                                        {link.label}
                                    </a>

                                    {/* ACTIVE UNDERLINE */}
                                    <span
                                        className={`
                      absolute left-0 right-0 -bottom-1 h-[2px] bg-primary transition-all
                      ${isActive ? "opacity-100 w-full" : "opacity-0 w-0"}
                    `}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
