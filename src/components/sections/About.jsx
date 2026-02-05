import { useEffect, useRef, useState } from "react";
import "animate.css";
import { sanityClient, urlFor } from "../../lib/sanityClient"

export default function About() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Intersection Observer za animaciju
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Fetch iz Sanity-ja
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "aboutPage"][0]{
          image,
          heading,
          intro,
          bullets,
          "cvUrl": cvFile.asset->url
        }`
            )
            .then((data) => {
                setAboutData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Sanity aboutPage error:", err);
                setLoading(false);
            });
    }, []);

    const bullets = aboutData?.bullets || [];

    // URL za sliku
    const imageUrl = aboutData?.image ? urlFor(aboutData.image).width(900).url() : null;

    return (
        <section id="about" ref={sectionRef} className="py-20">
            <div className="max-w-7xl xl2:max-w-8xl xl3:max-w-[1600px] xl4:max-w-[1800px] mx-auto px-4 grid gap-2 md:grid-cols-2 items-center">
                {/* Slika */}
                <div className="relative flex justify-center">
                    <div className="aspect-[3/4] overflow-hidden rounded-md border border-border-subtle shadow-lg shadow-primary/10 w-60 md:w-80 lg:w-96">
                        {loading ? (
                            <div className="w-full h-full bg-gray-200 animate-pulse" />
                        ) : imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={aboutData?.heading || "About"}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                                Nema slike
                            </div>
                        )}
                    </div>
                </div>

                {/* Tekst */}
                <div
                    className={`px-0 py-1 md:p-10 md:text-start text-center ${visible ? "animate__animated animate__fadeIn animate__slow" : "opacity-0"
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-heading">
                        {aboutData?.heading ? (
                            <>
                                {aboutData.heading.split(" ")[0]}{" "}
                                <span className="text-primary">
                                    {aboutData.heading.split(" ").slice(1).join(" ") || ""}
                                </span>
                            </>
                        ) : (
                            <>
                                O <span className="text-primary">Meni</span>
                            </>
                        )}
                    </h2>

                    <p className="text-theme-black mb-6 text-lg leading-relaxed">
                        {loading
                            ? "Učitavanje sadržaja..."
                            : aboutData?.intro ||
                            "Dodaj uvodni tekst u Sanity 'ABOUT PAGE' dokumentu."}
                    </p>

                    <div className="flex flex-col justify-center md:items-start items-start">
                        {/* Lista (bullets) */}
                        {bullets.length > 0 && (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-full gap-3 mb-8 text-md md:text-lg italic font-bold">
                                {bullets.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-start">
                                        <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <span className="text-black">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Dugme za CV */}
                        {aboutData?.cvUrl && (
                            <a
                                href={aboutData.cvUrl}
                                download
                                className="rounded-sm border border-primary px-10 py-4 text-md font-medium text-white bg-primary hover:bg-white hover:text-primary transition-colors"
                            >
                                Preuzmi CV
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
