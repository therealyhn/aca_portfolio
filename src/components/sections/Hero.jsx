import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../../lib/sanityClient";
import "animate.css";

export default function Hero() {
    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "hero"][0]`)
            .then((data) => setHeroData(data))
            .catch((err) => console.error(err));
    }, []);


    // Pozadinska slika: CMS → fallback → prazno
    const bgImage =
        heroData?.backgroundImage
            ? urlFor(heroData.backgroundImage).url()
            : "/img/slider/2.jpg";

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center md:pl-[20%] overflow-hidden pt-24"
        >
            {/* Background image from Sanity */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${bgImage}')` }}
            />

            {/* Scroll Indicator */}
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

                {/* Scrolling line */}
                <span className="relative h-16 w-px bg-white/30 overflow-hidden">
                    <span className="absolute top-0 left-0 w-full h-full bg-primary animate-scrollLine" />
                </span>
            </a>
        </section>
    );
}
