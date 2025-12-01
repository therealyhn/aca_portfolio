export default function Talk() {
    return (
        <section className="relative py-16 md:py-20">
            {/* Pattern pozadina kao u originalu */}
            <div className="absolute inset-0 opacity-20 bg-[url('/img/patterns/inspiration-geometry.png')] bg-repeat" />
            {/* Crni overlay */}
            <div className="absolute inset-0 bg-black/90" />

            <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Tekst */}
                <div className="md:max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                        <span className="relative inline-block">
                            I'm available for freelance work
                            <span className="absolute -bottom-1 left-full ml-2 h-1 w-5 bg-white animate-pulse" />
                        </span>
                    </h3>
                </div>

                {/* Dugme – anchor na contact */}
                <div>
                    <a
                        href="#contact"
                        className="
              inline-flex items-center text-sm md:text-base font-semibold
              text-white tracking-[0.15em] uppercase
              relative pb-1
            "
                    >
                        Contact Me
                        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white/30" />
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                    </a>
                </div>
            </div>
        </section>
    );
}
