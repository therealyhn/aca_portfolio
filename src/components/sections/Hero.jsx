export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center md:pl-[20%] overflow-hidden pt-24"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/img/slider/2.jpg')" }}
            />

            {/* Content
            <div className="relative z-10 max-w-6xl px-4 md:text-left text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight mb-4">
                    Aleksandar <span className="text-white">Jovanovic</span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted">
                    Photographer <span className="text-primary">&amp;</span> Graphic Designer
                </p>
            </div> */}

            {/* Scroll Indicator — bottom centered */}
            <a
                href="#about"
                className="
                    absolute bottom-8 left-[43%] md:left-1/2 -translate-x-1/2 transform
                    inline-flex flex-col items-center text-[11px] uppercase
                    tracking-[0.25em] text-white hover:text-primary transition-colors
                    animate__animated animate__fadeInUp
                "
            >
                <span className="mb-2">Scroll</span>

                {/* Animated vertical line */}
                <span className="relative h-16 w-px bg-white/30 overflow-hidden">
                    <span className="absolute top-0 left-0 w-full h-full bg-primary animate-scrollLine" />
                </span>
            </a>
        </section>
    );
}
