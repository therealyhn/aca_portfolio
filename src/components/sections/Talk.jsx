export default function Talk() {
    return (
        <section className="relative py-16 md:py-20">
            {/* Pattern pozadina */}
            <div
                className="pointer-events-none absolute inset-0 bg-repeat opacity-50 z-20"
                style={{
                    backgroundImage: "url('/img/patterns/gplay.png')",
                }}
            />
            {/* Crni overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/90 z-10" />

            {/* CONTENT IZABD SVEGA */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6">
                {/* Tekst */}
                <div className="md:max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                        <span className="relative inline-block text-center">
                            Otvoren sam za nove projekte
                            <span className="hidden md:block absolute -bottom-1 left-full ml-2 h-1 w-5 bg-white animate-pulse" />
                        </span>
                    </h3>
                </div>

                {/* Dugme – anchor na contact */}
                <div>
                    <a
                        href="#contact"
                        className="group inline-flex items-center text-sm md:text-base font-semibold text-white tracking-[0.15em] uppercase relative pb-1"
                    >
                        Zakaži Projekat

                        {/* tanka statična linija */}
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30" />

                        {/* animirana linija */}
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                    </a>
                </div>
            </div>
        </section>
    );
}
