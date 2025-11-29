import useActiveSection from "../../hooks/useActiveSection";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Portfolio", href: "portfolio" },
    { label: "News", href: "news" },
    { label: "Contact", href: "contact" },
];

export default function Mobile() {
    const [open, setOpen] = useState(false);
    const activeSection = useActiveSection(navLinks.map(l => l.href));

    return (
        <div className="md:hidden">
            {/* Header */}
            <div className="fixed top-0 inset-x-0 z-40 bg-white py-3 border-b">
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                    <img src="/img/logo/dark.png" className="h-7" />

                    <button onClick={() => setOpen(!open)}>
                        <div className="space-y-1">
                            <span className="block h-0.5 w-5 bg-black" />
                            <span className="block h-0.5 w-5 bg-black" />
                            <span className="block h-0.5 w-5 bg-black" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Menu list */}
            {open && (
                <nav className="fixed top-[56px] inset-x-0 bg-white border-b z-30">
                    <ul className="px-4 py-3 space-y-3">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;

                            return (
                                <li key={link.href}>
                                    <a
                                        href={`#${link.href}`}
                                        onClick={() => setOpen(false)}
                                        className={`
                      block py-1
                      ${isActive ? "text-primary font-semibold" : "text-black"}
                    `}
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
