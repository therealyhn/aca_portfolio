export default function Footer() {
    return (
        <footer className="relative bg-background-dark text-white pt-24 pb-10">
            {/* Sadržaj footera */}
            <div className="relative z-20 max-w-6xl mx-auto px-4">
                {/* Gornji red */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-10">
                    {/* Levo — Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/img/logo/dark.png"
                            alt="Logo"
                            className="h-10 brightness-0 invert"
                        />
                    </div>

                    {/* Centar — Social ikone */}
                    <div className="flex justify-center gap-6">
                        {["facebook", "twitter", "instagram", "dribbble"].map((icon) => (
                            <a key={icon} href="#" className="group">
                                <img
                                    src={`/img/svg/social/${icon}.svg`}
                                    alt={icon}
                                    className="h-5 opacity-80 group-hover:opacity-100 transition brightness-0 invert"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Desno — Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-xs text-gray-400 tracking-wide whitespace-nowrap">
                            © {new Date().getFullYear()} Aleksandar Jovanović
                        </p>
                        <p className="text-xs text-gray-500 tracking-wide">
                            All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Linija */}
                <div className="w-full h-px bg-white/10 mb-6" />

                {/* Potpis */}
                <p className="text-center text-xs text-gray-500">
                    Designed &amp; Developed by{" "}
                    <span className="text-primary font-semibold">Jovan Ljusić</span>
                </p>
            </div>
        </footer>
    );
}
