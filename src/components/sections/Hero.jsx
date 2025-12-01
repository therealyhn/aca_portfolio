export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/img/slider/2.jpg')" }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight mb-4">
                    Aleksandar <span className="text-white">Jovanovic</span>
                </h1>
                <p className="text-lg md:text-xl text-text-muted">
                    Photographer <span className="text-primary">&amp;</span> Graphic Designer
                </p>

                {/* Scroll down indicator */}
                <div className="mt-12 flex justify-center">
                    <a
                        href="#about"
                        className="inline-flex flex-col items-center text-[11px] uppercase tracking-[0.25em] text-text-muted hover:text-primary transition-colors"
                    >
                        <span className="mb-2">Scroll</span>
                        <span className="h-16 w-px bg-primary inline-block" />
                    </a>
                </div>
            </div>
        </section>
    );
}
