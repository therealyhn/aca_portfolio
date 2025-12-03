import { useEffect, useRef, useState } from "react";
import "animate.css";

export default function About() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

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

    return (
        <section id="about" ref={sectionRef} className="py-20">
            <div className="max-w-6xl xl2:max-w-7xl xl3:max-w-[1600px] xl4:max-w-[1800px] mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
                {/* Slika */}
                <div className="relative">
                    <div className={`aspect-[3/4] overflow-hidden rounded-2xl border border-border-subtle shadow-lg shadow-primary/10 ${visible ? "animate__animated animate__fadeInLeft animate__slow" : "opacity-0"}`}>
                        <img src="/img/about/1.jpg" alt="About" className="h-full w-full object-cover" />
                    </div>
                </div>

                {/* Tekst */}
                <div className={visible ? "animate__animated animate__fadeIn animate__slow" : "opacity-0"}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-heading">
                        O <span className="text-primary">Meni</span>
                    </h2>
                    <p className="text-theme-black mb-6 text-lg leading-relaxed">
                        Zdravo! Ja sam Aleksandar Jovanović, grafički dizajner i profesionalni fotograf koji voli da spaja hrabre vizuale sa autentičnim pričama.
                        Godine saradnje sa brendovima i umetnicima pomogle su mi da izgradim instinkt, pouzdanost i kreativnu disciplinu potrebnu da ideje ožive – od prvih skica do finalne, ispolirane fotografije.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-md md:text-lg italic font-bold">
                        {["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3", "Lorem Ipsum 4"].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary" />
                                <span className="text-black">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="/img/resume/resume.jpg"
                        download
                        className="inline-flex items-center rounded-md border border-primary px-10 py-4 text-md font-medium text-white bg-primary hover:bg-white hover:text-primary transition-colors"
                    >
                        Preuzmi CV
                    </a>
                </div>
            </div>
        </section>
    );
}
