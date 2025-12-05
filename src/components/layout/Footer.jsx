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
                            loading="lazy"
                        />
                    </div>

                    {/* Centar — Social ikone */}
                    <div className="flex justify-center gap-6">
                        {["facebook", "twitter", "instagram"].map((icon) => (
                            <a
                                key={icon}
                                href="#"
                                className="group rounded-full p-2 transition-transform transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary"
                                style={{ transition: 'box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)' }}
                            >
                                <span className="relative inline-block">
                                    <img
                                        src={`/img/svg/social/${icon}.svg`}
                                        alt={icon}
                                        className="
                                            h-5
                                            opacity-80
                                            group-hover:opacity-100
                                            brightness-0 invert
                                            transition
                                            duration-300
                                            ease-in-out
                                            group-hover:rotate-[20deg]
                                            group-hover:scale-110
                                            "
                                    />
                                    {/* animated ring on hover */}
                                    <span
                                        className="
                                            absolute
                                            -inset-2
                                            rounded-full
                                            pointer-events-none
                                            opacity-0
                                            group-hover:opacity-100
                                            group-hover:animate-[ping_1.2s_ease]
                                            border-2
                                            border-primary
                                            z-[-1]
                                        "
                                    ></span>
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Desno — Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-xs text-gray-400 tracking-wide whitespace-nowrap">
                            © {new Date().getFullYear()} Aleksandar Jovanović
                        </p>
                        <p className="text-xs text-gray-500 tracking-wide">
                            Sva prava zadržana.
                        </p>
                    </div>
                </div>

                {/* Linija */}
                <div className="w-full h-px bg-white/10 mb-6" />

                {/* Potpis */}
                <p className="text-center text-xs text-gray-500">
                    Dizajnirano &amp; razvijeno od strane{" "}
                    <a href="https://jovanljusic.com/" target="_blank" className="text-primary font-semibold hover:underline">Jovan Ljušić</a>
                </p>
            </div>
        </footer>
    );
}
